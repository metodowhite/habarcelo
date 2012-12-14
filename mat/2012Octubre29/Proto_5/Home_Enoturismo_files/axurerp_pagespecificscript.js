for(var i = 0; i < 394; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('CodigoPromocional')) == ('')) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('CodigoPromocional')) == ('true')) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u355', 'pd1u355','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u355', 'pd0u355','none','',500,'none','',500);

}

});
document.getElementById('u370_img').tabIndex = 0;

u370.style.cursor = 'pointer';
$axure.eventManager.click('u370', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
HookHover('u167', false);

u299.style.cursor = 'pointer';
$axure.eventManager.click('u299', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u180'] = 'top';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u216'] = 'top';gv_vAlignTable['u194'] = 'center';u333.tabIndex = 0;

u333.style.cursor = 'pointer';
$axure.eventManager.click('u333', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u333'] = 'top';u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u97'] = 'top';
u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u201'] = 'top';HookHover('u1', false);
gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u332'] = 'center';u151.tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u72'] = 'center';
u319.style.cursor = 'pointer';
$axure.eventManager.click('u319', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
document.getElementById('u378_img').tabIndex = 0;

u378.style.cursor = 'pointer';
$axure.eventManager.click('u378', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u192'] = 'center';
u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u287'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u345'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u65'] = 'top';u346.tabIndex = 0;

u346.style.cursor = 'pointer';
$axure.eventManager.click('u346', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u346'] = 'top';gv_vAlignTable['u318'] = 'top';gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u177'] = 'top';
u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u307'] = 'center';gv_vAlignTable['u285'] = 'top';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u162'] = 'center';u357.tabIndex = 0;

u357.style.cursor = 'pointer';
$axure.eventManager.click('u357', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u357'] = 'top';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u79'] = 'top';
u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u391'] = 'top';gv_vAlignTable['u284'] = 'top';gv_vAlignTable['u342'] = 'center';u356.tabIndex = 0;

u356.style.cursor = 'pointer';
$axure.eventManager.click('u356', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u356'] = 'top';gv_vAlignTable['u63'] = 'center';
u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u110'] = 'top';u348.tabIndex = 0;

u348.style.cursor = 'pointer';
$axure.eventManager.click('u348', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u305'] = 'top';u283.tabIndex = 0;

u283.style.cursor = 'pointer';
$axure.eventManager.click('u283', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u283'] = 'top';gv_vAlignTable['u20'] = 'center';u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u124'] = 'top';
u279.style.cursor = 'pointer';
$axure.eventManager.click('u279', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u38'] = 'center';u160.tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u297'] = 'center';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u228'] = 'top';u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u304'] = 'top';gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u123'] = 'center';u263.tabIndex = 0;

u263.style.cursor = 'pointer';
$axure.eventManager.click('u263', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u254'] = 'top';u343.tabIndex = 0;

u343.style.cursor = 'pointer';
$axure.eventManager.click('u343', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u343'] = 'top';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u12'] = 'top';u303.tabIndex = 0;

u303.style.cursor = 'pointer';
$axure.eventManager.click('u303', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u303'] = 'top';u358.tabIndex = 0;

u358.style.cursor = 'pointer';
$axure.eventManager.click('u358', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u358'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u317'] = 'center';gv_vAlignTable['u295'] = 'top';gv_vAlignTable['u109'] = 'top';u253.tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u253'] = 'top';gv_vAlignTable['u172'] = 'top';u359.tabIndex = 0;

u359.style.cursor = 'pointer';
$axure.eventManager.click('u359', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u359'] = 'top';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u294'] = 'top';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u386'] = 'top';gv_vAlignTable['u64'] = 'top';
u239.style.cursor = 'pointer';
$axure.eventManager.click('u239', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u315'] = 'top';u293.tabIndex = 0;

u293.style.cursor = 'pointer';
$axure.eventManager.click('u293', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u293'] = 'top';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u373'] = 'center';gv_vAlignTable['u265'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u292'] = 'center';u133.tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u369'] = 'top';
u387.style.cursor = 'pointer';
$axure.eventManager.click('u387', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u327'] = 'center';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u385'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u322'] = 'center';
u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u275'] = 'top';
u329.style.cursor = 'pointer';
$axure.eventManager.click('u329', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u248'] = 'top';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u383'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u224'] = 'top';gv_vAlignTable['u379'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u91'] = 'top';
u309.style.cursor = 'pointer';
$axure.eventManager.click('u309', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u328'] = 'top';u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u382'] = 'top';u223.tabIndex = 0;

u223.style.cursor = 'pointer';
$axure.eventManager.click('u223', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u223'] = 'top';u142.tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u142'] = 'top';u70.tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u237'] = 'center';
u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u354'] = 'top';u273.tabIndex = 0;

u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u273'] = 'top';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u381'] = 'center';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u6'] = 'top';document.getElementById('u372_img').tabIndex = 0;

u372.style.cursor = 'pointer';
$axure.eventManager.click('u372', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u61.tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u353'] = 'center';gv_vAlignTable['u272'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u367'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u235'] = 'top';
u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u366'] = 'top';
u339.style.cursor = 'pointer';
$axure.eventManager.click('u339', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u73'] = 'top';u351.tabIndex = 0;

u351.style.cursor = 'pointer';
$axure.eventManager.click('u351', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u351'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u365'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u338'] = 'top';gv_vAlignTable['u186'] = 'center';u233.tabIndex = 0;

u233.style.cursor = 'pointer';
$axure.eventManager.click('u233', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u87'] = 'center';u350.tabIndex = 0;

u350.style.cursor = 'pointer';
$axure.eventManager.click('u350', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u350'] = 'top';u347.tabIndex = 0;

u347.style.cursor = 'pointer';
$axure.eventManager.click('u347', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u347'] = 'top';gv_vAlignTable['u247'] = 'center';gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u101'] = 'top';u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u115'] = 'top';u313.tabIndex = 0;

u313.style.cursor = 'pointer';
$axure.eventManager.click('u313', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u313'] = 'top';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u363'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u377'] = 'center';
u259.style.cursor = 'pointer';
$axure.eventManager.click('u259', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u114'] = 'center';document.getElementById('u57_img').tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u312'] = 'center';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u218'] = 'top';document.getElementById('u376_img').tabIndex = 0;

u376.style.cursor = 'pointer';
$axure.eventManager.click('u376', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Otros_productos.html');

}
});
gv_vAlignTable['u99'] = 'center';u349.tabIndex = 0;

u349.style.cursor = 'pointer';
$axure.eventManager.click('u349', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u349'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u325'] = 'top';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u390'] = 'center';u361.tabIndex = 0;

u361.style.cursor = 'pointer';
$axure.eventManager.click('u361', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u361'] = 'top';gv_vAlignTable['u375'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u324'] = 'top';u243.tabIndex = 0;

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u243'] = 'top';u360.tabIndex = 0;

u360.style.cursor = 'pointer';
$axure.eventManager.click('u360', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u360'] = 'top';gv_vAlignTable['u257'] = 'center';gv_vAlignTable['u69'] = 'center';
u289.style.cursor = 'pointer';
$axure.eventManager.click('u289', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
document.getElementById('u374_img').tabIndex = 0;

u374.style.cursor = 'pointer';
$axure.eventManager.click('u374', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Lotes.html');

}
});
gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u184'] = 'top';u323.tabIndex = 0;

u323.style.cursor = 'pointer';
$axure.eventManager.click('u323', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u323'] = 'top';gv_vAlignTable['u242'] = 'center';gv_vAlignTable['u96'] = 'center';document.getElementById('u344_img').tabIndex = 0;

u344.style.cursor = 'pointer';
$axure.eventManager.click('u344', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u337'] = 'center';gv_vAlignTable['u155'] = 'top';gv_vAlignTable['u288'] = 'top';
u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u183'] = 'top';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u255'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u182'] = 'top';
u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u335'] = 'top';gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u371'] = 'center';gv_vAlignTable['u181'] = 'top';
u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u334'] = 'top';
u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
