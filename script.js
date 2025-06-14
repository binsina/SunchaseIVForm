document.getElementById("qa-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbxAvjvL_CrBERhIe-25h9JlpmuAvsmviXueRRNaS0Of8xn-VGmsFEOeQ3GDFXejtgen/exec", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
      document.getElementById("response").classList.remove("hidden");
      document.getElementById("response").innerHTML = `<p>Submission successful. Thank you!</p>`;
    })
    .catch((error) => {
      console.error("Submission failed:", error);
      alert("Submission failed. Check console for details.");
    });
});
