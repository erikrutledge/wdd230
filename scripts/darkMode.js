const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const root = document.querySelector(':root');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌚")) {
        root.style.setProperty('--accent1','#243242');
        root.style.setProperty('--accent2','#3a5573');
        root.style.setProperty('--accent3','#486689');
        root.style.setProperty('--text','#fff');
        root.style.setProperty('--bg','#000');
		modeButton.textContent = "🌝";
	} else {
        root.style.setProperty('--accent1','#d5bdaf');
        root.style.setProperty('--accent2','#e3d5ca');
        root.style.setProperty('--accent3','#edede9');
        root.style.setProperty('--text','#000');
        root.style.setProperty('--bg','#fff');
		modeButton.textContent = "🌚";
	}
});
