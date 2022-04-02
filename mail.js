const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAOGBp7H8xuA-ci5B2dIkggMpvrqhygu74",
    authDomain: "contactform-3c404.firebaseapp.com",
    databaseURL: "https://contactform-3c404-default-rtdb.firebaseio.com",
    projectId: "contactform-3c404",
    storageBucket: "contactform-3c404.appspot.com",
    messagingSenderId: "415269044282",
    appId: "1:415269044282:web:50d0f2f3e3ae6aa4677503",
    measurementId: "G-N7D2ZZZ3VH"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var productname = getElementVal("productname");
    var expirydate= getElementVal("expirydate");
    var productinf = getElementVal("productinf");
  
    saveMessages(productname, expirydate, productinf);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (productname, expirydate, productinf) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      productname : productname,
      expirydate: expirydate,
      productinf : productinf,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };