for(var i = 0; i < 103; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

}

});
gv_vAlignTable['u21'] = 'top';u86.tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u46'] = 'top';u76.tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u31'] = 'center';u77.tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u77'] = 'top';document.getElementById('u93_img').tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u53'] = 'top';u87.tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u7'] = 'center';u60.tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u60'] = 'top';u89.tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u49'] = 'top';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u81'] = 'center';u85.tabIndex = 0;

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'top';u71.tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u71'] = 'top';
u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u36'] = 'top';u75.tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u37'] = 'top';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u73'] = 'center';u84.tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u39'] = 'top';u78.tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u35'] = 'center';
u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u33'] = 'center';document.getElementById('u72_img').tabIndex = 0;

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u48'] = 'center';document.getElementById('u67_img').tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u14'] = 'top';u74.tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u98'] = 'center';