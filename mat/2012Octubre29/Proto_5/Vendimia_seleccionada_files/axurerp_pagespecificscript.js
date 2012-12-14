for(var i = 0; i < 106; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u84', 'pd0u84','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}

});
gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u25'] = 'center';u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u76'] = 'center';
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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('El_Club.html');

}
});
document.getElementById('u93_img').tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u53'] = 'top';document.getElementById('u87_img').tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tramitar_solicitud.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u30'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u34'] = 'top';u17.tabIndex = 0;

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
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u81'] = 'center';document.getElementById('u97_img').tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if ((GetGlobalVariableValue('Indentificado')) != ('true')) {

}
else
if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Solicitud_de_Barricas.html');

}
});
document.getElementById('u85_img').tabIndex = 0;

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tramitar_solicitud.html');

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u71'] = 'top';u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u37'] = 'top';u2.tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u83'] = 'center';document.getElementById('u95_img').tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tramitar_solicitud.html');

}
});
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u43'] = 'center';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u73'] = 'top';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u94'] = 'top';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u61'] = 'center';document.getElementById('u91_img').tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('El_Club.html');

}
});
gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u56'] = 'top';u5.tabIndex = 0;

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
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u101'] = 'center';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u98'] = 'top';document.getElementById('u80_img').tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
