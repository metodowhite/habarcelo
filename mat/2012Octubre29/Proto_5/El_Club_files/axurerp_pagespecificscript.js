for(var i = 0; i < 101; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

}

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}

});
document.getElementById('u86_img').tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u25'] = 'center';u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u76'] = 'top';
u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
document.getElementById('u77_img').tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u30'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u34'] = 'top';u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u64'] = 'center';u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u71'] = 'top';u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u37'] = 'top';u2.tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u2'] = 'top';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if ((GetGlobalVariableValue('Indentificado')) != ('true')) {

}
else
if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Solicitud_de_Barricas.html');

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u43'] = 'center';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u68'] = 'top';document.getElementById('u90_img').tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tramitar_solicitud.html');

}
});
gv_vAlignTable['u73'] = 'top';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u78'] = 'center';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u56'] = 'top';document.getElementById('u82_img').tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tramitar_solicitud.html');

}
});
u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u12'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u33'] = 'top';u18.tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u67'] = 'top';document.getElementById('u88_img').tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Vendimia_seleccionada.html');

}
});
gv_vAlignTable['u57'] = 'top';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u70'] = 'top';document.getElementById('u74_img').tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Vendimia_seleccionada.html');

}
});
gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u80'] = 'center';