for(var i = 0; i < 85; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u75', 'pd1u75','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u75', 'pd0u75','none','',500,'none','',500);

}

});
gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u46'] = 'top';u76.tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u31'] = 'top';u77.tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u62'] = 'center';
u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', 'true');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u1'] = 'center';
u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
u66.tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u8'] = 'top';
u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u17'] = 'center';document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u19'] = 'center';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u79'] = 'top';u81.tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'top';u71.tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u45'] = 'top';
u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recordar_claves.html');

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u47'] = 'top';u68.tabIndex = 0;

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u54'] = 'top';u69.tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u69'] = 'top';u78.tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u33'] = 'top';u63.tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u63'] = 'top';u67.tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u40'] = 'center';u70.tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u59'] = 'top';u80.tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u80'] = 'top';