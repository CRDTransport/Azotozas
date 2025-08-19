function buyItem(itemName, price) {
  document.getElementById("qrPopup").style.display = "block";
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: "Thanh toán " + itemName + " - $" + price,
    width: 200,
    height: 200
  });
}

function closePopup() {
  document.getElementById("qrPopup").style.display = "none";
}
// ===== Xử lý khi nhấn nút Buy trong Items =====
function buyItem(itemName, price) {
  alert("Bạn đã chọn mua " + itemName + " với giá " + price);
  // Giả lập hiển thị QR Code
  const qrContainer = document.getElementById("qrContainer");
  if (qrContainer) {
    qrContainer.innerHTML = `
      <h3>Quét mã QR để thanh toán</h3>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${itemName}-${price}" alt="QR Code">
    `;
  }
}

// ===== Kiểm tra mã Pass =====
function checkCode() {
  const input = document.getElementById("accessCode").value;
  const error = document.getElementById("error");
  const hiddenInfo = document.getElementById("hiddenInfo");

  if (input === "44899513") {
    error.style.display = "none";
    hiddenInfo.style.display = "block";
  } else {
    hiddenInfo.style.display = "none";
    error.style.display = "block";
  }
}
