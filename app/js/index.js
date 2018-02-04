import "../scss/application.scss";
import Controller from "./controller";
import View from "./view";


$(document).ready(function() {
	const initialTimeObject = {minutes: 5, seconds: 0};
	const initialBreakTimeObject = {minutes: 5, seconds: 0};
	new View();
	new Controller(initialTimeObject, initialBreakTimeObject);
});