
function showLab(id) {
  document.querySelectorAll(".lab").forEach(l => l.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* 🧪 بيانات علمية مبسطة */
const data = {
  NaCl: { type: "أيوني", melting: "مرتفع جدًا", conductivity: "يوصل عند الانصهار/المحلول" },
  CaCl2: { type: "أيوني", melting: "مرتفع جدًا", conductivity: "يوصل عند الانصهار/المحلول" },
  wax: { type: "تساهمي", melting: "منخفض", conductivity: "لا يوصل" },
  al: { type: "فلزي", melting: "مرتفع", conductivity: "يوصل" },
  cu: { type: "فلزي", melting: "مرتفع", conductivity: "يوصل عاليًا" },
  water: { type: "تساهمي", melting: "منخفض", conductivity: "ضعيف جدًا" }
};

/* 🔥 اختبار الانصهار */
function testMelting() {
  let m = document.getElementById("meltingMaterial").value;
  let result = data[m].melting;

  document.getElementById("meltingResult").innerText =
    "درجة الانصهار: " + result;

  addRow("meltingTable", m, result);

  feedback("melting", m);
}

/* ⚡ التوصيل */
function testConduct() {
  let m = document.getElementById("conductMaterial").value;
  let result = data[m].conductivity;

  document.getElementById("conductResult").innerText =
    "التوصيل الكهربائي: " + result;

  addRow("conductTable", m, result);

  feedback("conduct", m);
}

/* 🔥⚡ منصهر */
function testMolten() {
  let m = document.getElementById("moltenMaterial").value;

  let result = "يوصل الكهرباء عند الانصهار (بسبب تحرر الأيونات)";

  document.getElementById("moltenResult").innerText = result;

  addRow("moltenTable", m, result);
}

/* جدول */
function addRow(tableId, material, result) {
  let row = `<tr><td>${material}</td><td>${result}</td></tr>`;
  document.getElementById(tableId).innerHTML += row;
}

/* 💡 تغذية راجعة تعليمية */
function feedback(type, material) {
  let d = data[material];

  let msg = "";

  if (d.type === "أيوني") {
    msg = "💡 المادة أيونية: ترتبط بقوى كهروستاتيكية قوية → توصيل عند الانصهار أو في المحلول";
  }

  if (d.type === "تساهمي") {
    msg = "💡 مادة تساهمية: جزيئات منفصلة → لا توصيل كهربائي";
  }

  if (d.type === "فلزي") {
    msg = "💡 رابطة فلزية: إلكترونات حرة → توصيل كهربائي عالي في الحالة الصلبة";
  }

  alert(msg);
}
