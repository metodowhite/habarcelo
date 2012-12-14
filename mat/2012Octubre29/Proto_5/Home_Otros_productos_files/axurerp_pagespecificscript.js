for(var i = 0; i < 132; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('CodigoPromocional')) == ('')) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('CodigoPromocional')) == ('true')) {

}

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u93', 'pd1u93','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u93', 'pd0u93','none','',500,'none','',500);

}

});
u86.tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u16'] = 'top';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u31'] = 'top';document.getElementById('u77_img').tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u62'] = 'center';u87.tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u87'] = 'top';HookHover('u1', false);
gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u66'] = 'center';document.getElementById('u112_img').tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u60'] = 'center';u89.tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u103'] = 'top';u81.tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u81'] = 'top';u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u124'] = 'top';u85.tabIndex = 0;

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'top';document.getElementById('u108_img').tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Enoturismo.html');

}
});
document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u36'] = 'top';document.getElementById('u75_img').tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u129'] = 'top';u95.tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u68'] = 'center';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
u84.tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u24'] = 'center';u99.tabIndex = 0;

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u111'] = 'center';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u120'] = 'top';document.getElementById('u114_img').tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
u94.tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u6'] = 'top';u96.tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u96'] = 'top';document.getElementById('u61_img').tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u26'] = 'center';document.getElementById('u65_img').tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
gv_vAlignTable['u56'] = 'center';document.getElementById('u116_img').tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u123'] = 'center';document.getElementById('u82_img').tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u72'] = 'center';document.getElementById('u63_img').tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u48'] = 'top';document.getElementById('u110_img').tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Lotes.html');

}
});
document.getElementById('u67_img').tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u88'] = 'top';document.getElementById('u57_img').tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u101'] = 'center';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u74'] = 'center';document.getElementById('u59_img').tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_otros_productos.html');

}
});
u98.tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u121'] = 'top';