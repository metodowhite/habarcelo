for(var i = 0; i < 381; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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

	SetPanelState('u343', 'pd1u343','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u343', 'pd0u343','none','',500,'none','',500);

}

});
gv_vAlignTable['u370'] = 'top';HookHover('u167', false);
gv_vAlignTable['u299'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u180'] = 'top';gv_vAlignTable['u216'] = 'top';gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u333'] = 'center';u97.tabIndex = 0;

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
gv_vAlignTable['u231'] = 'center';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u201'] = 'top';HookHover('u1', false);
gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u11'] = 'top';document.getElementById('u332_img').tabIndex = 0;

u332.style.cursor = 'pointer';
$axure.eventManager.click('u332', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
u151.tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u378'] = 'top';
u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u192'] = 'center';u331.tabIndex = 0;

u331.style.cursor = 'pointer';
$axure.eventManager.click('u331', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u331'] = 'top';gv_vAlignTable['u321'] = 'center';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u48'] = 'top';u345.tabIndex = 0;

u345.style.cursor = 'pointer';
$axure.eventManager.click('u345', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u345'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u65'] = 'top';u346.tabIndex = 0;

u346.style.cursor = 'pointer';
$axure.eventManager.click('u346', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u346'] = 'top';
u318.style.cursor = 'pointer';
$axure.eventManager.click('u318', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
u268.tabIndex = 0;

u268.style.cursor = 'pointer';
$axure.eventManager.click('u268', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u330'] = 'center';gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u177'] = 'top';
u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u307'] = 'top';gv_vAlignTable['u285'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u162'] = 'center';document.getElementById('u357_img').tabIndex = 0;

u357.style.cursor = 'pointer';
$axure.eventManager.click('u357', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Enoturismo.html');

}
});
u79.tabIndex = 0;

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
gv_vAlignTable['u306'] = 'center';gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u110'] = 'top';u348.tabIndex = 0;

u348.style.cursor = 'pointer';
$axure.eventManager.click('u348', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u20'] = 'center';u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u38'] = 'center';u241.tabIndex = 0;

u241.style.cursor = 'pointer';
$axure.eventManager.click('u241', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u241'] = 'top';u160.tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u297'] = 'center';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u355'] = 'top';gv_vAlignTable['u81'] = 'center';
u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u88'] = 'top';u304.tabIndex = 0;

u304.style.cursor = 'pointer';
$axure.eventManager.click('u304', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u304'] = 'top';
u282.style.cursor = 'pointer';
$axure.eventManager.click('u282', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u240'] = 'center';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u303'] = 'center';gv_vAlignTable['u281'] = 'top';gv_vAlignTable['u358'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u317'] = 'top';u295.tabIndex = 0;

u295.style.cursor = 'pointer';
$axure.eventManager.click('u295', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u295'] = 'top';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u253'] = 'top';gv_vAlignTable['u172'] = 'top';document.getElementById('u359_img').tabIndex = 0;

u359.style.cursor = 'pointer';
$axure.eventManager.click('u359', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u316'] = 'top';gv_vAlignTable['u294'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u64'] = 'top';
u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u315'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u373'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u200'] = 'top';u133.tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u369'] = 'top';u250.tabIndex = 0;

u250.style.cursor = 'pointer';
$axure.eventManager.click('u250', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u250'] = 'top';
u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u368'] = 'center';
u327.style.cursor = 'pointer';
$axure.eventManager.click('u327', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u119'] = 'top';u277.tabIndex = 0;

u277.style.cursor = 'pointer';
$axure.eventManager.click('u277', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u277'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u262'] = 'top';u322.tabIndex = 0;

u322.style.cursor = 'pointer';
$axure.eventManager.click('u322', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u322'] = 'top';gv_vAlignTable['u276'] = 'center';gv_vAlignTable['u249'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u261'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u341'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u91'] = 'top';
u309.style.cursor = 'pointer';
$axure.eventManager.click('u309', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u106'] = 'top';u223.tabIndex = 0;

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
gv_vAlignTable['u70'] = 'top';
u237.style.cursor = 'pointer';
$axure.eventManager.click('u237', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});

u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u354'] = 'top';
u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u372'] = 'center';u61.tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u353'] = 'top';gv_vAlignTable['u272'] = 'top';u336.tabIndex = 0;

u336.style.cursor = 'pointer';
$axure.eventManager.click('u336', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u336'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u235'] = 'top';
u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u271'] = 'top';gv_vAlignTable['u366'] = 'center';u339.tabIndex = 0;

u339.style.cursor = 'pointer';
$axure.eventManager.click('u339', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u339'] = 'top';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u351'] = 'center';gv_vAlignTable['u270'] = 'center';gv_vAlignTable['u199'] = 'top';document.getElementById('u365_img').tabIndex = 0;

u365.style.cursor = 'pointer';
$axure.eventManager.click('u365', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u26'] = 'center';u338.tabIndex = 0;

u338.style.cursor = 'pointer';
$axure.eventManager.click('u338', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u338'] = 'top';
u300.style.cursor = 'pointer';
$axure.eventManager.click('u300', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u87'] = 'center';u347.tabIndex = 0;

u347.style.cursor = 'pointer';
$axure.eventManager.click('u347', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u347'] = 'top';gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u364'] = 'center';gv_vAlignTable['u101'] = 'top';u115.tabIndex = 0;

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
gv_vAlignTable['u313'] = 'top';u232.tabIndex = 0;

u232.style.cursor = 'pointer';
$axure.eventManager.click('u232', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u232'] = 'top';
u246.style.cursor = 'pointer';
$axure.eventManager.click('u246', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
document.getElementById('u363_img').tabIndex = 0;

u363.style.cursor = 'pointer';
$axure.eventManager.click('u363', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u377'] = 'center';u259.tabIndex = 0;

u259.style.cursor = 'pointer';
$axure.eventManager.click('u259', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u114'] = 'center';document.getElementById('u57_img').tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u312'] = 'center';gv_vAlignTable['u290'] = 'top';gv_vAlignTable['u326'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u362'] = 'center';gv_vAlignTable['u99'] = 'center';u286.tabIndex = 0;

u286.style.cursor = 'pointer';
$axure.eventManager.click('u286', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_lote.html');

}
});
gv_vAlignTable['u286'] = 'top';u349.tabIndex = 0;

u349.style.cursor = 'pointer';
$axure.eventManager.click('u349', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u349'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u325'] = 'top';gv_vAlignTable['u244'] = 'top';document.getElementById('u361_img').tabIndex = 0;

u361.style.cursor = 'pointer';
$axure.eventManager.click('u361', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Otros_productos.html');

}
});
gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u324'] = 'center';gv_vAlignTable['u243'] = 'center';gv_vAlignTable['u360'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u289'] = 'top';
u374.style.cursor = 'pointer';
$axure.eventManager.click('u374', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ficha_Enoturismo.html');

}
});
gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u184'] = 'top';gv_vAlignTable['u96'] = 'center';u344.tabIndex = 0;

u344.style.cursor = 'pointer';
$axure.eventManager.click('u344', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u344'] = 'top';
u291.style.cursor = 'pointer';
$axure.eventManager.click('u291', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
u337.tabIndex = 0;

u337.style.cursor = 'pointer';
$axure.eventManager.click('u337', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u337'] = 'top';gv_vAlignTable['u155'] = 'top';gv_vAlignTable['u288'] = 'center';
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
gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u197'] = 'top';
u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u182'] = 'top';
u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u196'] = 'center';u335.tabIndex = 0;

u335.style.cursor = 'pointer';
$axure.eventManager.click('u335', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u335'] = 'top';gv_vAlignTable['u308'] = 'top';
u264.style.cursor = 'pointer';
$axure.eventManager.click('u264', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u181'] = 'top';
u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
gv_vAlignTable['u258'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u41'] = 'top';u334.tabIndex = 0;

u334.style.cursor = 'pointer';
$axure.eventManager.click('u334', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u334'] = 'top';
u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Check_Out.html');

}
});
