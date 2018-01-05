import "../scss/application.scss";
import Clock from "./clock";
import Timer from "./timer";
import View from "./view";

$(document).ready(function() {
	new View();
	new Clock(Timer);
});