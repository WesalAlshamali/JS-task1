document.getElementById('personal-data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const description = document.getElementById('description').value;
    const major = document.getElementById('major').value;
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(el => el.value);
    
  
    const data = {
      name,
      age,
      gender,
      description,
      major,
      languages
    };
    

    localStorage.setItem('personalData', JSON.stringify(data));
    renderData(data);
  });
  
  function renderData(data) {
    const container = document.getElementById('cards-container');
    
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${data.name}</h3>
      <p><strong>Age:</strong> ${data.age}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Description:</strong> ${data.description}</p>
      <p><strong>Major and University:</strong> ${data.major}</p>
      <p><strong>Preferred Programming Languages:</strong> ${data.languages.join(', ')}</p>
    `;
    
    container.appendChild(card);
  }
  
  window.onload = function() {
    const storedData = localStorage.getItem('personalData');
    if (storedData) {
      renderData(JSON.parse(storedData));
    }
  };
//   window.localStorage.clear();