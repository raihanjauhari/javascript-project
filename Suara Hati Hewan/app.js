(function () {
  const customerImage = document.querySelector("#customer-img");
  const customerName = document.querySelector("#customer-name");
  const customerText = document.querySelector("#customer-text");

  const btn = document.querySelectorAll(".btn");
  let index = 0;
  const customers = [];

  function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
  }

  function createCustomer(imgName, name, text) {
    let img = `./images/${imgName}.jpeg`;
    let customer = new Customer(img, name, text);

    customers.push(customer);
  }

  createCustomer(
    0,
    "Mas Oyen",
    "Saya tinggal sama manusia yang katanya sayang kucing... tapi kenapa snack saya disensor tiap hari?! Gak dikasih tiap minta, harus nunggu nanti-nanti. Ini pelecehan terhadap bangsawan berbulu kayak saya! Tapi… dia pernah nyelimutin saya pas hujan. Yaudah deh… saya kasih 🌟🌟🌟🌟. Tapi snack jangan lupa, ya!"
  );
  createCustomer(
    1,
    "Shiba Inu",
    "Saya selalu bahagia tiap dia pulang... walau kadang itu tukang galon. Tapi yaudahlah, aku tetap loncat-loncat kayak kangguru. Tapi please... JANGAN ngajak ke dokter hewan terus bilang jalan-jalan. Aku punya perasaan juga, tau!"
  );
  createCustomer(
    2,
    "Mimi si Marmut",
    "Aku suka sayurannya, suka tempat tinggalnya... tapi kenapa pas aku minta perhatian dia malah main HP? Aku tuh cerewet karena peduli! Nih ya... 🐹❤️ Tapi overall: 8/10 karena masih belum ngerti bahasa marmut."
  );
  createCustomer(
    3,
    "MasBro dari Selatan",
    "Manusia ini baik... dikasih makan, dikasih playlist lo-fi tiap sore, dikasih kolam renang plastik bekas. Hidup tenang, nggak drama. Tapi tolong... jangan ajak aku TikTok-an tiap hari. Aku makhluk zen, bukan influencer."
  );
  createCustomer(
    4,
    "Mas G",
    "Cewek-cewek bilang aku buaya? Wah... itu fitnah. Aku tuh setia, cuma banyak temen. Tapi kalau ditanya soal manusia ini... dia keren sih, bisa bikin aku kapok main hati. Jadi ya... aku pensiun jadi buaya. Mungkin..."
  );

  btn.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (button.classList.contains("prevBtn")) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        customerImage.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }

      if (button.classList.contains("nextBtn")) {
        index++;
        if (index === customers.length) {
          index = 0;
        }
        customerImage.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }
    });
  });
})();
