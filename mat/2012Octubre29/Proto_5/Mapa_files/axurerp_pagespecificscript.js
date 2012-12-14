for(var i = 0; i < 89; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u30', 'pd1u30','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

}

});
u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u51'] = 'top';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u46'] = 'top';u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u38'] = 'center';u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u32'] = 'top';u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u7'] = 'top';u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u17'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u15'] = 'top';u36.tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u83'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u3'] = 'top';
u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u28'] = 'center';u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u61'] = 'center';u35.tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u35'] = 'top';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u42'] = 'top';u33.tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u63'] = 'center';u18.tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u80'] = 'center';