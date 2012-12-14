for(var i = 0; i < 509; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelState('u486', 'pd1u486','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelState('u486', 'pd0u486','none','',500,'none','',500);

}

});

u370.style.cursor = 'pointer';
$axure.eventManager.click('u370', function(e) {

if ((GetGlobalVariableValue('Indentificado')) == ('')) {

	SetPanelStateNext('u0',false,'none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('Indentificado')) == ('true')) {

	SetPanelStateNext('u0',false,'none','',500,'none','',500);

	SetPanelState('u122', 'pd1u122','none','',500,'none','',500);

}
});
u488.tabIndex = 0;

u488.style.cursor = 'pointer';
$axure.eventManager.click('u488', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u488'] = 'top';gv_vAlignTable['u465'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u400'] = 'top';gv_vAlignTable['u216'] = 'top';
u194.style.cursor = 'pointer';
$axure.eventManager.click('u194', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
u492.tabIndex = 0;

u492.style.cursor = 'pointer';
$axure.eventManager.click('u492', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Club_Cosme_Palacio.html');

}
});
gv_vAlignTable['u492'] = 'top';gv_vAlignTable['u333'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u152'] = 'top';gv_vAlignTable['u331'] = 'top';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u347'] = 'top';gv_vAlignTable['u363'] = 'top';gv_vAlignTable['u166'] = 'center';
u464.style.cursor = 'pointer';
$axure.eventManager.click('u464', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u215'] = 'top';
u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u391'] = 'center';gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u346'] = 'center';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u389'] = 'top';u463.tabIndex = 0;

u463.style.cursor = 'pointer';
$axure.eventManager.click('u463', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u463'] = 'top';
u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	SetPanelState('u123', 'pd0u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u54'] = 'top';u477.tabIndex = 0;

u477.style.cursor = 'pointer';
$axure.eventManager.click('u477', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Noticias.html');

}
});
gv_vAlignTable['u477'] = 'top';gv_vAlignTable['u214'] = 'top';
u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u321'] = 'top';
u287.style.cursor = 'pointer';
$axure.eventManager.click('u287', function(e) {

if (true) {

	SetPanelState('u123', 'pd0u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u426'] = 'top';gv_vAlignTable['u327'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u476'] = 'center';gv_vAlignTable['u318'] = 'top';gv_vAlignTable['u449'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u330'] = 'top';gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u425'] = 'top';gv_vAlignTable['u344'] = 'center';
u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u501'] = 'center';gv_vAlignTable['u461'] = 'top';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u177'] = 'top';document.getElementById('u475_img').tabIndex = 0;

u475.style.cursor = 'pointer';
$axure.eventManager.click('u475', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u505'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u410'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u417'] = 'top';gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u424'] = 'top';gv_vAlignTable['u460'] = 'top';gv_vAlignTable['u357'] = 'top';gv_vAlignTable['u408'] = 'center';gv_vAlignTable['u176'] = 'top';u474.tabIndex = 0;

u474.style.cursor = 'pointer';
$axure.eventManager.click('u474', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});
gv_vAlignTable['u474'] = 'top';gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u332'] = 'top';gv_vAlignTable['u306'] = 'top';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u423'] = 'top';gv_vAlignTable['u342'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u437'] = 'center';gv_vAlignTable['u356'] = 'center';gv_vAlignTable['u388'] = 'top';gv_vAlignTable['u148'] = 'top';u490.tabIndex = 0;

u490.style.cursor = 'pointer';
$axure.eventManager.click('u490', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Identificacion.html');

}
});
gv_vAlignTable['u490'] = 'top';gv_vAlignTable['u305'] = 'center';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u279'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u409'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u459'] = 'top';gv_vAlignTable['u240'] = 'center';
u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u435'] = 'center';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u471'] = 'top';gv_vAlignTable['u485'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u303'] = 'top';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u420'] = 'top';
u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('La_Tienda.html');

}
});

u317.style.cursor = 'pointer';
$axure.eventManager.click('u317', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', 'false');

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u207', 'pd1u207','none','',500,'none','',500);

}
});

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u109'] = 'top';
u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u172'] = 'top';gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u422'] = 'top';gv_vAlignTable['u433'] = 'center';gv_vAlignTable['u108'] = 'top';
u252.style.cursor = 'pointer';
$axure.eventManager.click('u252', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	SetPanelState('u123', 'pd0u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u447'] = 'top';gv_vAlignTable['u473'] = 'center';gv_vAlignTable['u266'] = 'center';gv_vAlignTable['u398'] = 'top';gv_vAlignTable['u301'] = 'top';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u2'] = 'top';
u315.style.cursor = 'pointer';
$axure.eventManager.click('u315', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', 'false');

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	self.location.href='#';

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u293'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u134'] = 'top';u251.tabIndex = 0;

u251.style.cursor = 'pointer';
$axure.eventManager.click('u251', function(e) {

if (true) {

	SetPanelState('u207', 'pd3u207','none','',500,'none','',500);

}
});
gv_vAlignTable['u251'] = 'top';gv_vAlignTable['u496'] = 'top';gv_vAlignTable['u446'] = 'top';gv_vAlignTable['u373'] = 'center';gv_vAlignTable['u16'] = 'top';
u238.style.cursor = 'pointer';
$axure.eventManager.click('u238', function(e) {

if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u365'] = 'top';gv_vAlignTable['u200'] = 'top';
u314.style.cursor = 'pointer';
$axure.eventManager.click('u314', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recordar_claves.html');

}
});
gv_vAlignTable['u292'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u431'] = 'center';
u250.style.cursor = 'pointer';
$axure.eventManager.click('u250', function(e) {

if (true) {

	SetPanelState('u207', 'pd1u207','none','',500,'none','',500);

}
});
gv_vAlignTable['u387'] = 'top';gv_vAlignTable['u445'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u368'] = 'top';gv_vAlignTable['u386'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u444'] = 'top';
u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	SetPanelStatePrevious('u0',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u385'] = 'center';gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u443'] = 'top';
u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	SetPanelStateNext('u0',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u498'] = 'top';gv_vAlignTable['u457'] = 'top';gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u249'] = 'top';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u406'] = 'top';gv_vAlignTable['u503'] = 'center';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u442'] = 'top';gv_vAlignTable['u61'] = 'center';
u275.style.cursor = 'pointer';
$axure.eventManager.click('u275', function(e) {

if (true) {

	SetPanelStatePrevious('u207',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u329'] = 'top';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u405'] = 'top';gv_vAlignTable['u30'] = 'center';
u224.style.cursor = 'pointer';
$axure.eventManager.click('u224', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u379'] = 'top';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u397'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u455'] = 'top';gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u328'] = 'top';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u404'] = 'top';gv_vAlignTable['u382'] = 'top';gv_vAlignTable['u223'] = 'top';
u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u378'] = 'center';gv_vAlignTable['u340'] = 'center';gv_vAlignTable['u396'] = 'center';
u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

}
});
u491.tabIndex = 0;

u491.style.cursor = 'pointer';
$axure.eventManager.click('u491', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Conocenos.html');

}
});
gv_vAlignTable['u491'] = 'top';gv_vAlignTable['u354'] = 'center';
u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	SetPanelState('u207', 'pd2u207','none','',500,'none','',500);

}
});
gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u403'] = 'center';gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u458'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u127'] = 'top';u489.tabIndex = 0;

u489.style.cursor = 'pointer';
$axure.eventManager.click('u489', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registro.html');

}
});
gv_vAlignTable['u489'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u19'] = 'top';
u308.style.cursor = 'pointer';
$axure.eventManager.click('u308', function(e) {

if (true) {

SetGlobalVariableValue('Indentificado', 'true');

	SetPanelState('u122', 'pd1u122','none','',500,'none','',500);

}
});
gv_vAlignTable['u259'] = 'top';
u421.style.cursor = 'pointer';
$axure.eventManager.click('u421', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u416'] = 'top';gv_vAlignTable['u394'] = 'top';gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u352'] = 'top';gv_vAlignTable['u366'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u158'] = 'center';
u220.style.cursor = 'pointer';
$axure.eventManager.click('u220', function(e) {

if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u415'] = 'center';gv_vAlignTable['u393'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u351'] = 'top';gv_vAlignTable['u380'] = 'top';
u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u338'] = 'center';gv_vAlignTable['u392'] = 'top';gv_vAlignTable['u233'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u350'] = 'top';u487.tabIndex = 0;

u487.style.cursor = 'pointer';
$axure.eventManager.click('u487', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Area_personal.html');

}
});
gv_vAlignTable['u487'] = 'top';gv_vAlignTable['u247'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u364'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u313'] = 'top';gv_vAlignTable['u468'] = 'top';gv_vAlignTable['u427'] = 'top';gv_vAlignTable['u412'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u507'] = 'center';gv_vAlignTable['u76'] = 'top';
u326.style.cursor = 'pointer';
$axure.eventManager.click('u326', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

}
});

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u362'] = 'top';gv_vAlignTable['u376'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u349'] = 'top';gv_vAlignTable['u311'] = 'top';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u484'] = 'center';gv_vAlignTable['u325'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u375'] = 'top';gv_vAlignTable['u429'] = 'top';gv_vAlignTable['u348'] = 'top';u478.tabIndex = 0;

u478.style.cursor = 'pointer';
$axure.eventManager.click('u478', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Bodega_directa.html');

}
});
gv_vAlignTable['u478'] = 'top';gv_vAlignTable['u185'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u243'] = 'top';u479.tabIndex = 0;

u479.style.cursor = 'pointer';
$axure.eventManager.click('u479', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u479'] = 'top';gv_vAlignTable['u441'] = 'center';gv_vAlignTable['u360'] = 'top';gv_vAlignTable['u497'] = 'top';
u257.style.cursor = 'pointer';
$axure.eventManager.click('u257', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Contacto.html');

}
});
gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u374'] = 'top';gv_vAlignTable['u428'] = 'top';gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u206'] = 'top';u482.tabIndex = 0;

u482.style.cursor = 'pointer';
$axure.eventManager.click('u482', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u482'] = 'top';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u288'] = 'top';gv_vAlignTable['u454'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u10'] = 'top';u481.tabIndex = 0;

u481.style.cursor = 'pointer';
$axure.eventManager.click('u481', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u481'] = 'top';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u322'] = 'top';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u336'] = 'center';gv_vAlignTable['u255'] = 'top';gv_vAlignTable['u309'] = 'top';gv_vAlignTable['u467'] = 'top';gv_vAlignTable['u359'] = 'center';u480.tabIndex = 0;

u480.style.cursor = 'pointer';
$axure.eventManager.click('u480', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Empresas.html');

}
});
gv_vAlignTable['u480'] = 'top';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u494'] = 'center';gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u452'] = 'top';gv_vAlignTable['u371'] = 'top';gv_vAlignTable['u90'] = 'top';
u466.style.cursor = 'pointer';
$axure.eventManager.click('u466', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ayuda.html');

}
});
gv_vAlignTable['u439'] = 'center';gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u320'] = 'center';
u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u217'] = 'top';u195.tabIndex = 0;

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

	SetPanelState('u123', 'pd2u123','none','',500,'none','',500);

}
});
gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u334'] = 'top';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u451'] = 'center';