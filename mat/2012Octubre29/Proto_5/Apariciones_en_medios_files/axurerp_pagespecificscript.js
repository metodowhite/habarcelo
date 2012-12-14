for(var i = 0; i < 111; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

}

});
u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u51'] = 'top';
u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_vino.html');

}
});
u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u76'] = 'top';u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u93'] = 'center';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Premios.html');

}
});
u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u32'] = 'top';u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u84'] = 'top';u30.tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u89'] = 'top';u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u34'] = 'top';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u15'] = 'center';
u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u95'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u3'] = 'top';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u106'] = 'top';u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u94'] = 'top';u96.tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u65'] = 'center';document.getElementById('u105_img').tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
document.getElementById('u109_img').tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Comunicados.html');

}
});
gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u9'] = 'top';u33.tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u44'] = 'top';u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u59'] = 'center';