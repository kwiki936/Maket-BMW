const server = 'https://jsonplaceholder.typicode.com/posts';

const btnSend = document.querySelector('.modal__button')

const sendData = (data, callBack, falseCallBack) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200 || request.status === 201) {
      const respons = JSON.parse(request.responseText);
      callBack(respons.id);
    } else {
      falseCallBack(request.status);
      throw new Error(request.status);
    }
  })

  request.send(data);
};

const formElems = document.querySelectorAll('.form')

const formHandler = (form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {};

    for (const { name, value } of form.elements) {
      if (name !== '') {
        data[name] = value;
      }
    }
    console.log(data);

    const smallElem = document.createElement('small');

    const clearSmall = () => {
      smallElem.innerHTML = '';
      smallElem.style.color = '';
      form.append(smallElem);
    }

    const btnDisabled = () => {
      btnSend.setAttribute('disabled');
      btnSend.disabled = true;
    }

    sendData(JSON.stringify(data),
      (id) => {
        smallElem.innerHTML = 'Ваша заявка №' + id + '!<br> В ближайшее время с вами свяжемся!';
        smallElem.style.color = 'green';
        form.append(smallElem);

        setTimeout(clearSmall, 5000);
        setTimeout(btnDisabled, 5000);
      },
      (err) => {
        smallElem.textContent = 'Технические неполадки, попробуйте отправть данные позже.';
        smallElem.style.color = 'red';
        form.append(smallElem);

        setTimeout(clearSmall, 5000);
      });


    form.reset();
  })
};

formElems.forEach(formHandler);

