// Fungsi untuk mengembalikan objek berisi kategori status BMI.
function getBmiCategories() {
    return {
      UNDERWEIGHT: 'Berat Badan Kurang',
      IDEAL: 'Normal',
      OVERWEIGHT: 'Berat Badan Lebih',
      OBESITY: 'Obesitas',
    };
  }
  
  // Fungsi untuk menghitung BMI berdasarkan berat badan dan tinggi badan.
  function calculateBMI(weight, height) {
    let bmi = weight / ((height / 100) ** 2);
    return bmi.toFixed(1);
  }
  
  // Fungsi untuk melakukan validasi input berat badan, tinggi badan, usia, dan jenis kelamin.
  function validateInput(weight, height, age, gender) {
    const genderErrorMessage = document.getElementById('genderErrorMessage');
    const weightErrorMessage = document.getElementById('weightErrorMessage');
    const ageErrorMessage = document.getElementById('ageErrorMessage');
    const heightErrorMessage = document.getElementById('heightErrorMessage');
  
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((element) => (element.innerText = ''));
  
    let isValid = true;
  
    if (gender == '' || !['Pria', 'Wanita'].includes(gender)) {
      genderErrorMessage.innerText = 'Pilih jenis kelamin terlebih dahulu';
      isValid = false;
    }
  
    if (isNaN(weight) || weight <= 0) {
      weightErrorMessage.innerText = 'Berat badan harus berupa angka lebih dari 0';
      isValid = false;
    }
  
    if (isNaN(height) || height <= 0) {
      heightErrorMessage.innerText = 'Tinggi badan harus berupa angka lebih dari 0';
      isValid = false;
    }
  
    if (isNaN(age) || age <= 0) {
      ageErrorMessage.innerText = 'Usia harus berupa angka lebih dari 0';
      isValid = false;
    }
  
    return isValid;
  }
  
  // Fungsi untuk mengecek status BMI berdasarkan nilai BMI dan jenis kelamin.
  function checkStatus(bmi) {
    let status = '';
    if (bmi < 18.5) {
        status = getBmiCategories().UNDERWEIGHT;
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = getBmiCategories().IDEAL;
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = getBmiCategories().OVERWEIGHT;
      } else if (bmi >= 30.0) {
        status = getBmiCategories().OBESITY;
      }
    return status;
  }
  
  // Fungsi untuk mendapatkan deskripsi teks berdasarkan status BMI.
  function getDescText(status) {
    if (status === getBmiCategories().UNDERWEIGHT) {
      return 'Anda memiliki berat badan kurang dari normal.';
    } else if (status === getBmiCategories().IDEAL) {
      return 'Anda memiliki berat badan yang ideal. GOOD JOB!!';
    } else if (status === getBmiCategories().OVERWEIGHT) {
      return 'Anda memiliki berat badan berlebih.';
    } else if (status === getBmiCategories().OBESITY) {
      return 'Anda memiliki berat badan yang sangat berlebih.';
    }
  }
  
  // Fungsi untuk mendapatkan teks saran berdasarkan status BMI.
  function getSuggestionText(status) {
    if (status === getBmiCategories().UNDERWEIGHT) {
      return 'Anda berada dalam kategori kekurangan berat badan. Usahakan untuk menambah berat badan hingga batas normal.';
    } else if (status === getBmiCategories().IDEAL) {
      return 'Anda berada dalam kategori berat badan yang normal.';
    } else if (status === getBmiCategories().OVERWEIGHT) {
      return 'Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.';
    } else if (status === getBmiCategories().OBESITY) {
      return 'Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makanan dan aktivitas fisik.';
    }
  }
  
  // Fungsi untuk mendapatkan teks saran kesehatan berdasarkan status BMI.
  function getAdviceText(status) {
    if (status === getBmiCategories().UNDERWEIGHT) {
      return 'Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.';
    } else if (status === getBmiCategories().IDEAL) {
      return 'Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.';
    } else if (status === getBmiCategories().OVERWEIGHT) {
      return 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
    } else if (status === getBmiCategories().OBESITY) {
      return 'Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.';
    }
  }
  
  // Fungsi untuk mendapatkan daftar penyakit terkait berdasarkan status BMI.
  function getDiseases(status) {
    if (status === getBmiCategories().UNDERWEIGHT) {
      return ['Infertilitas', 'Anemia', 'Osteoporosis', 'Sistem Immun Lemah'];
    } else if (status === getBmiCategories().IDEAL) {
      return ['Tidak ada'];
    } else if (status === getBmiCategories().OVERWEIGHT || status === getBmiCategories().OBESITY) {
      return ['Diabetes', 'Hipertensi', 'Sakit Jantung', 'Osteoarthritis'];
    }
  }
  
  // Fungsi untuk menghasilkan tampilan informasi BMI dan status pada halaman HTML.
  function generateDisplay(bmi, status) {
    const resultTitle = document.getElementById('result-title');
    resultTitle.innerText = status;
    const resultBmi = document.getElementById('result-bmi');
    resultBmi.innerText = bmi;
    const resultDesc = document.getElementById('result-desc');
    resultDesc.innerText = getDescText(status);
  
    const resultText = document.getElementById('result-text');
    resultText.innerText = `Hasil BMInya adalah ${bmi}`;
  
    const suggestionText = document.getElementById('suggestion-text');
    suggestionText.innerText = getSuggestionText(status);
  
    const adviceText = document.getElementById('advice-text');
    adviceText.innerText = getAdviceText(status);
  
    const riskTitle = document.getElementById('risk-title');
    riskTitle.innerText = `Beberapa risiko penyakit yang berhubungan dengan status BMI:`;
  
    const riskList = document.getElementById('list-risk');
    riskList.innerHTML = '';
  
    const diseases = getDiseases(status);
    diseases.forEach((disease) => {
      const listItem = document.createElement('li');
      listItem.innerText = disease;
      riskList.appendChild(listItem);
    });
  
    // Tampilkan hasil pada elemen dengan id 'result'.
    document.getElementById('result').classList.remove('hidden');
  }
  
  // Fungsi untuk melakukan pengecekan BMI dan menampilkan hasilnya.
  function checkBMI() {
    const weight = +document.getElementById('weight').value;
    const height = +document.getElementById('height').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = +document.getElementById('age').value;
  
    // Validasi input, jika tidak valid, maka akan dihentikan proses selanjutnya.
    if (!validateInput(weight, height, age, gender)) {
      return;
    }
  
    // Hitung BMI dan tentukan statusnya.
    const bmi = calculateBMI(weight, height);
    const status = checkStatus(bmi, gender);
  
    // Tampilkan hasil pada halaman HTML.
    generateDisplay(bmi, status);
  
    // Gulirkan halaman ke area hasil (dengan efek smooth).
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Fungsi untuk menghilangkan tampilan hasil BMI dan kembali ke halaman awal (home).
  function clearBMI() {
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
  }
  