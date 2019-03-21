var dt = new Date();
dt = dt.toLocaleString()
dt = dt.slice(0, -3)
document.getElementById("datetime").value = dt.toLocaleString();
