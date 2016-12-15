//Space Helper by @juegoman

$(document).ready(function () {
	var calcBtn = $("#calc");
	var parallaxInput = $("#parallax");
	var peakWLInput = $("#peakWL");
	var appMagInput = $("#appMag");
	var metallicityInput = $("#metallicity");

	var distOutput = $("#distance");
	var absMagOutput = $("#absMag");
	var lumOutput = $("#luminosity");
	var tempOutput = $("#temperature");
	var sMassOutput = $("#sMass");
	var sRadiusOutput = $("#sRadius");
	var lifeOutput = $("#lifetime");

	var dopplerValInput = $("#dopplerShiftVal");
	var dopplerExpInput = $("#dopplerShiftExp");
	var brightnessDropInput = $("#brightnessDrop");
	var brightnessPeriodInput = $("#brightnessDropPeriod");
	var dopplerRestInput = $("#dopplerRest");

	var orbitalROutput = $("#orbitalRadius");
	var brightnessDropYearsOutput = $("#brightnessDropYears");
	var dopplerVelocityOutput = $("#dopplerVelocity");
	var pMassOutput = $("#pMass");
	var pMassGOutput = $("#pMassGrams");
	var pRadiusOutput = $("#pRadius");
	var pRadiusCMOutput = $("#pRadiusCM");
	var pVolumeOutput =$("#pVolume");
	var densityOutput = $("#density");

	var albedoInput = $('#albedo');
	var pressureInput = $('#pressure');

	var fluxOutput = $('#flux');
	var effTempOutput = $('#effTemp');

	calcBtn.on("click", function () {
		var parallax = parallaxInput.val();
		var peakWL = peakWLInput.val();
		var appMag = appMagInput.val();
		var metallicityInput = peakWLInput.val();

		var dopplerVal = dopplerValInput.val();
		var dopplerExp = dopplerExpInput.val();
		var brightnessDrop = brightnessDropInput.val();
		var brightnessPeriod = brightnessPeriodInput.val();
		var dopplerRest = dopplerRestInput.val();

		var albedo = albedoInput.val();
		var pressure = pressureInput.val();

		var dist = 3.26 / parallax;
		distOutput.text(dist);
		var absMag = Math.log10(parallax) * 5 + 5 + parseFloat(appMag);
		absMagOutput.text(absMag);
		var luminosity = Math.pow(10, (4.8 - absMag) / 2.5);
		lumOutput.text(luminosity);
		var temperature = 2897768.5 / peakWL;
		tempOutput.text(temperature);
		var sMass = Math.pow(luminosity, 1 / 3.5);
		sMassOutput.text(sMass);
		var sRadius = Math.sqrt(luminosity) / Math.pow(temperature / 5800, 2);
		sRadiusOutput.text(sRadius);
		var lifetime = 10000000000 * Math.pow(sMass, -2.5);
		lifeOutput.text(lifetime);

		var brightnessDropYears = brightnessPeriod / 365;
		brightnessDropYearsOutput.text(brightnessDropYears);
		var orbitalRadius = Math.cbrt(sMass * Math.pow(brightnessDropYears, 2));
		orbitalROutput.text(orbitalRadius);
		var dopplerVelocity = ((dopplerVal * Math.pow(10, dopplerExp)) / dopplerRest) * 300000000;
		dopplerVelocityOutput.text(dopplerVelocity);
		var pMass = Math.sqrt(Math.pow(dopplerVelocity, 2) * orbitalRadius * sMass) * 11.177;
		pMassOutput.text(pMass);
		var pMassGrams = pMass * 5.97 * Math.pow(10, 27);
		pMassGOutput.text(pMassGrams);
		var pRadius = Math.sqrt(brightnessDrop / 100) * sRadius * 109;
		pRadiusOutput.text(pRadius);
		var pRadiusCM = pRadius * 6.37 * Math.pow(10, 8);
		pRadiusCMOutput.text(pRadiusCM);
		var pVolume = (4 / 3) * Math.PI * Math.pow(pRadiusCM, 3);
		pVolumeOutput.text(pVolume);
		var density = pMassGrams / pVolume;
		densityOutput.text(density);

		var flux = (luminosity * 3.839 * Math.pow(10, 26)) / (4 * Math.PI * Math.pow(orbitalRadius * 1.496 * Math.pow(10, 11), 2));
		fluxOutput.text(flux);
		var effTemp = Math.pow((flux * (1 - albedo)) / (4 * 5.67 * Math.pow(10, -8)), 0.25);
		effTempOutput.text(effTemp);

	});
});
