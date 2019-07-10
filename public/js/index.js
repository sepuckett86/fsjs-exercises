const dogList = document.getElementById('dog-list');

fetch('/api/v1/dogs')
  .then(res => res.json())
  .then(res => {
    res.forEach(dog => {
      const dogItem = document.createElement('li');
      dogItem.textContent = dog.name;
      dogList.appendChild(dogItem);
    });
  });
