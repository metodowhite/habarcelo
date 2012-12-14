for(var i = 0; i < 101; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('Indentificado')) == ('')) {

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

}

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u18', 'pd1u18','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u18', 'pd0u18','none','',500,'none','',500);

}

});
u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u38'] = 'top';u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u1'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u17'] = 'top';u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u97'] = 'top';
u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recordar_claves.html');

}
});
u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u37'] = 'top';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('El_Club.html');

}
});
gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u95'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u22'] = 'top';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u84'] = 'top';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u20'] = 'top';u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u78'] = 'center';document.getElementById('u94_img').tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Vendimia_seleccionada.html');

}
});
u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u6'] = 'top';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tramitar_solicitud.html');

}
});
gv_vAlignTable['u61'] = 'top';
u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u5'] = 'center';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u12'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u57'] = 'top';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u40'] = 'top';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u59'] = 'top';document.getElementById('u98_img').tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if ((GetGlobalVariableValue('Indentificado')) != ('true')) {

}
else
if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Solicitud_de_Barricas.html');

}
});

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', 'true');

}
});
