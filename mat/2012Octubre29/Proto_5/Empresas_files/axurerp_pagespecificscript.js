for(var i = 0; i < 122; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u32', 'pd0u32','none','',500,'none','',500);

}

});
document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u51'] = 'top';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u93'] = 'top';u38.tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u38'] = 'top';u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u89'] = 'top';u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'center';
u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u97'] = 'top';
u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if ((GetWidgetText('u117')) != ('CPHAB')) {

	SetPanelVisibility('u119','','none',500);

}
else
if ((GetWidgetText('u117')) == ('CPHAB')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u45'] = 'top';u36.tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u75'] = 'top';u37.tabIndex = 0;

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u3'] = 'center';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u73'] = 'top';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u50'] = 'top';u28.tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u28'] = 'top';u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u61'] = 'center';document.getElementById('u91_img').tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Solicitud_de_presupuesto.html');

}
});
u35.tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u35'] = 'top';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u5'] = 'top';u33.tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u80'] = 'top';