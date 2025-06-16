document.getElementById("qa-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("fullname").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    console.log("Sending data:", { name, address, email });

    fetch("https://script.google.com/macros/s/AKfycbxAvjvL_CrBERhIe-25h9JlpmuAvsmviXueRRNaS0Of8xn-VGmsFEOeQ3GDFXejtgen/exec", {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        body: JSON.stringify({ name, address, email }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from Google Script:", data);
      if (data.success) {
        const responseDiv = document.getElementById("response");
        responseDiv.classList.remove("hidden");
        responseDiv.innerHTML = `
          <h2>Thank You!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Email:</strong> ${email}</p>
        `;
      } else {
        alert("Error saving data.");
      }
    })
    .catch(err => {
      console.error("Submission failed", err);
      alert("Submission failed." + err);
    });
  });
  