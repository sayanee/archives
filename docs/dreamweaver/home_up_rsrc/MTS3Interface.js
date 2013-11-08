var VET_IfVer="04.00.03.15",
VET_newID=0,
VET_ch,
VET_Ap=(navigator.appName),
VET_Bv=(parseInt(navigator.appVersion.substring(0,1))),
VET_Ag=(navigator.userAgent.toLowerCase()),
VET_IE=(VET_Ap=="Microsoft Internet Explorer"&&(VET_Bv>=4)),
VET_NN=(VET_Ap.indexOf("Netscape")!=-1),
VET_NN4=((VET_Ap.indexOf("Netscape")!=-1)&&(VET_Bv==4)),
VET_Gecko=(VET_Ag.indexOf('gecko')!=-1),
VET_NN6=((VET_Ap.indexOf("Netscape")!=-1)&&(VET_Gecko)),
VET_CS=((VET_Ag.indexOf(' cs ')!=-1)&&(!isNaN(VET_Ag.charAt(VET_Ag.indexOf(' cs ')+4)))),
VET_AOL=(VET_Ag.indexOf('aol')!=-1),
VET_AppVer=parseFloat(navigator.appVersion),
VET_Win=(navigator.platform=="Win32"),
VET_Mac=(VET_Ag.indexOf('mac')!=-1),
VET_Java=(navigator.javaEnabled()),
VET_Mim="application/x-mtx",
VET_Cv=VET_Hff=VET_Mc=VET_Dbg=VET_Sdr=0,
VET_NNtrgr="0",VET_Pu,
VET_OlID="03F998B2-0E00-11D3-A498-00104B6EB52E",
VET_NuID="1B00725B-C455-4DE6-BFB6-AD540AD427CD",
VET_Gnns=VET_Gac=VET_Gurl=VET_Gnam=VET_Gprp="",
VET_Dv="http://www.viewpoint.com/developerzone/download/",
VET_Re=VET_Dv+'redirector.html?',VET_Ln="none",VET_Tr="Trigger",VET_Rtyp=1,
VET_Ic="ISceneComponent",VET_Cf="ComponentFileName",
VET_Sc="SceneComponent.mtc",VET_Bk="BroadcastKeyFileURL",
VET_Bu=VET_Dv+'vet_install_popup_'
MTSPlugin.prototype.genid=0
	//Start legacy defines
	//These are only here for legacy support for pages that use them in their HTML already.
	//If they clash with your own definitions, delete them. we don't use them in this file.
	isIE=isIE4=(VET_IE||VET_Gecko);
	isNN=VET_NN4;
	isMac=VET_Mac;
	isWin=VET_Win;
	//End legacy
function Check_OSX(){if(!VET_Mac)return false;if(VET_Ag.indexOf("mac os x")!=-1)return true;
	for(var i=0;i<navigator.plugins.length;i++){
		if(navigator.plugins[i].name.toLowerCase()=="default plugin carbon.cfm")return true;
	}
	return false;
}
VET_MacOSX=Check_OSX();
VET_UnknownOS=((!VET_Mac)&&(!VET_Win));
VET_UnknownBrowser=((!VET_IE)&&(!VET_NN));
if(VET_Mac)VET_Pu=VET_Bu+"mac.html"
else{VET_Gurl=VET_Bu+"ns.html";VET_Gnam="vet_install"
	VET_Gprp="width=500,height=400,toolbar=no,location=no,resizable=no"
	VET_Pu="Javascript:MTSopenBrWindow(VET_Gurl,VET_Gnam,VET_Gprp)"
}
if(VET_IE&&!VET_Mac)document.write("<SCRIPT LANGUAGE=\"VBScript\">\nDim p_o\nFunction VET_IEChk(n)\nVET_IEChk=1\nOn Error Resume Next\nSet p_o=CreateObject(n)\nif IsObject(p_o) then\nVET_IEChk=0\nend if\nEnd Function\n</SCRIPT>\n")
function MTSDebugger(i){VET_Dbg=i}
function MTSConsole(p1,p2){_mtsConsole(p1,p2)}
function VET_Ci(){
	if(VET_ch.closed){
		var e=new Date();e.setTime(e.getTime()+30000);
		SetCookie("VETInstallerPopup",("AutoReload; expires="+e.toGMTString()));
		if((GetCookie("VETInstallerPopup").substring(0,10)=="AutoReload")||IsMTSInstalled())location.reload()
	}
	else setTimeout("VET_Ci()",1000)
}
function MTSopenBrWindow(u,n,f){VET_ch=window.open(u,n,f);setTimeout("VET_Ci()",1000)}
function VET_Np(mimetype,pluginName){
	for(var i=0;i<navigator.plugins.length;i++){
		if(navigator.plugins[i].name.toLowerCase()==pluginName.toLowerCase()){
			for(var j=0;j<navigator.plugins[i].length;j++){
				var mim=navigator.plugins[i][j]
				if(mim.enabledPlugin&&(mim.type==mimetype)){
					if(VET_newID==1)VET_OlID=VET_NuID
					return true
				}
			}
			return false
		}
	}
	return false
}
function VET_Ax(){var x="AxMetaStream.MetaStreamCtl"
	if((VET_newID==1)&&(VET_IEChk(x+"Secondary")==0)){VET_OlID=VET_NuID;return true}
	if(VET_IEChk(x)==0) return true
	if((VET_newID==0)&&(VET_IEChk(x+"Secondary")==0)){VET_OlID=VET_NuID;return true}
	return false
}
function IsMTSInstalled(){var i=true,m="MetaStream"+(VET_Mac?"3":" 3 Plugin")
	if(VET_IE&&!VET_Mac)i=VET_Ax()
	else i=VET_Np(VET_Mim,m)
	return i
}
var VET_IsIn=IsMTSInstalled();
MTSPlugin.prototype.createParams=function(pi){this.newParamString=""
	var cMV="50332936",gMV="50332496";this.LN=VET_Ln;var parms=""
	if(pi!=null){var tA=pi.split(";")
		for(var i=0;i<tA.length;i++){
			if(tA[i]!=""){var tV=tA[i].split("=");re= / /g;
				tV[0]=tV[0].replace(re,"");var tv0l=tV[0].toLowerCase()
				if(tv0l=="genieminimumversion"){tV[1]=tV[1].replace(re,"");gMV=tV[1]}
				else if(tv0l=="componentminimumversion"){tV[1]=tV[1].replace(re,"");cMV=tV[1]}
				else if(tv0l=="classid"){tV[1]=tV[1].replace(re,"");VET_OlID=tV[1]}
				else if(tv0l=="layer"){tV[1]=tV[1].replace(re,"");this.LN=tV[1]}
				else if(tv0l=="nntrigger"){tV[1]=tV[1].replace(re,"");VET_NNtrgr=tV[1]}
				else if(tv0l=="contenttype"){tV[1]=tV[1].replace(re,"");VET_Rtyp=tV[1]}
				else if(tv0l=="imagelink"){tV[1]=tV[1].replace(re,"");this.ImageLink=tV[1]}
				else if(tv0l=="basehref"){tV[1]=tV[1].replace(re,"");if(tV[1]=="1")this.newParamString+="basehref"+"="+VET_href(this.LN)+";"}
				else if(tv0l=="popup"){tV[1]=tV[1].replace(re,"");this.popUp=tV[1]}
				else{var idx=1,token1=tV[idx-1],token2=tV[idx];idx++
					while (tV[idx]!=null){token2+="="+tV[idx];idx++}
					parms+=AddParm(token1,token2)
					this.newParamString+=token1+"="+token2+";"
				}
			}
		}
	}
	if((VET_NN4&&(VET_AppVer<4.5))||(VET_Gecko))this.popUp=1;
	parms+=AddParm("ComponentMinimumVersion",cMV);parms+=AddParm("GenieMinimumVersion",gMV);parms+=AddParm("VMPClassID",("{"+VET_OlID+"}"));parms+=AddParm("PageURL",window.location.href)
	this.newParamString+="parentlocation="+self.location.href+";"
	this.newParamString+="referrer="+(window.VET_Referrer?window.VET_Referrer:window.location.href)
	return parms
}
function AddParm(n,v){if(VET_IE&&VET_Win)return MTSParm(n,v);else return (n+" = "+"'"+v+"' ")}
function GetCookie(a){var e,m=" "+document.cookie+";",N=" "+a+"=",s=m.indexOf(N);if(s!=1){s+=N.length;e=m.indexOf(";",s);return (unescape(m.substring(s,e)))}}
function SetCookie(n,v){document.cookie=n+"="+escape(v)}
function ClearCookie(n){var e=new Date();e.setTime(e.getTime()-(3*24*60*60*1000));document.cookie=n+"=ImOutOfHere; expires="+e.toGMTString()}
function VET_href(ln){var t="mtsEmpty.html",doc="",c,l
	if(VET_NN4&&(ln!=VET_Ln))doc="document."+ln+"."
	doc+="document."
	eval("c="+doc+"links.length")
	var y="write(\"<a href='\"+t+\"'></a>\")"
	eval(doc+y)
	eval("l="+doc+"links[c].href")
	if(t==l)l=""
	else{var re= /mtsEmpty.html/g;
		l=l.replace(re,"");
	}
	return l
}
function MTS_IsString(s){if(s=="")return true;for(var i=0;i<s.length;i++){if(((s.charAt(i)<"0")||(s.charAt(i)>"9"))&&(s.charAt(i)!=".")&&(s.charAt(i)!="-"))return true}return false}
function MTSWrapValue(v){var rs=v.toString();if(MTS_IsString(rs))rs="'"+rs+"'";return rs}
function MTSPlugin(file,width,height,bkey,alt,parmsc){
	if((alt.toLowerCase()=="classic")||(alt.toLowerCase()=="none")){alt=VET_Ln;if(MTSPlugin.prototype.genid==0)VET_NNtrgr="1"}
	if(VET_Gecko&&(alt=="none"))alt="popup";
	var str=VET_Ln,na=this.name="MetaCtl"+MTSPlugin.prototype.genid.toString()
	MTSPlugin.prototype.genid++;this.LN=VET_Ln;	this.ImageLink="0"
	var parms=this.createParams(parmsc)
	if((alt.length!=0)&&(!VET_IsIn))str=alt
	if((VET_NNtrgr=="1")&&(VET_Cv==0)&&VET_NN4)TriggerJS()
	if((((str.toLowerCase()==VET_Ln)&&(!VET_Mac))||((GetCookie(na)=="1")&&(!VET_Mac)))&&((!(this.popUp=="1"))||(str.toLowerCase()==VET_Ln))||(VET_IsIn)){
		if(VET_Win&&VET_IE){var ch
			if(file!="")ch=MTSParm("Source",file)
			ch+=MTSParm("Component",VET_Ic)+MTSParm(VET_Cf,VET_Sc)+MTSParm(VET_Bk,bkey)
			ch+=parms;ch+=MTSParm("properties",this.newParamString)
			var cbURL="https://components.viewpoint.com/MTSInstallers/MetaStream3.cab"+"?url="+(window.VET_Referrer?window.VET_Referrer:window.location.href)+"#Version=3,0,2,62"
			str=MTSMarkup("object",ch,"id",na,"classid",("CLSID:"+VET_OlID),"width",width,"height",height,((MTSPlugin.prototype.genid==1)?"codebase":"dummy"),cbURL)
			if(VET_Dbg==1)MTSConsole(str,na)
			document.write(str)
		}else{var tag
			if(VET_Mac&&VET_NN4&&!VET_IsIn)tag="PLUGINSPAGE"
			else if(VET_Mac&&VET_IE&&!VET_IsIn)MTSJumpToRedirector(this.LN)
			else tag="PluginURL"
			str=MTSMarkup("embed"," ","component",VET_Ic,"componentfilename",VET_Sc,"source",file,"type",VET_Mim,"width",width,"height",height,"border",true,"script",true,"name",na,tag,VET_Pu,VET_Bk,bkey,"properties",this.newParamString,parms)
			if(this.LN!=VET_Ln){
				if(VET_Dbg==1)MTSConsole(str,na)
				if(VET_IE||VET_Gecko)document.write(str)
				else{VET_Gnns=str;var v="document."+this.LN+".document.write(VET_Gnns);";eval(v)}
			}else{
				if(VET_Dbg==1)MTSConsole(str,na)
				document.write(str)
			}
			if(GetCookie(na+VET_Tr)=="1"){ClearCookie(na+VET_Tr)
				if((this.popUp!='1')&&(VET_NN4))TriggerJS()
			}
		}
		if(this.ImageLink=="1")ClearCookie(na)
	}else{
		if((this.ImageLink!="1"&&this.popUp=="1")||((GetCookie(na)=="1")&&(this.popUp=="1"))||(str.toLowerCase()=="popup")||(VET_Mac&&((str==VET_Ln)||(GetCookie(na)=="1")))){
			if(this.ImageLink=="1")ClearCookie(na)
			if((alt!=VET_Ln)&&(alt.toLowerCase()!="popup")){VET_Gac=alt
				if((VET_NN4)&&(this.LN!=VET_Ln)){var outStr="document."+this.LN+".document.write(VET_Gac);"
					if(VET_Dbg==1)MTSConsole(outStr,na)
					eval(outStr)
				}else{
					if(VET_Dbg==1)MTSConsole(alt,na)
					document.write(alt)
				}
			}
			MTSJumpToRedirector(this.LN)
		}else{
			if(this.ImageLink=="1")str=MTSMarkup("A",str,"HREF","JavaScript:mtsClick();")
			VET_Gac=str
			if(VET_NN4&&(this.LN!=VET_Ln)){var outStr="document."+this.LN+".document.write(VET_Gac);"
				if(VET_Dbg==1)MTSConsole(outStr,na)
				eval(outStr)
			}else{
				if(VET_Dbg==1)MTSConsole(str,na)
				document.write(str)
			}
		}
	}
	if(VET_Mac&&VET_IE){
		if(VET_Hff==0){document.write("<div id='HiddenLayer' style='position:absolute;left:-1000px;top:-1000px;width:0px;height:0;z-index:0;visibility:hidden'><form name='MTS3'><input type=text name='mts3_js_jsfield'></form></div>")
			setInterval('ExecValue()',3);VET_Hff=1
		}
	}
}
function mtsClick(){var t=""
	for(var i=0;i<MTSPlugin.prototype.genid;i++){t="MetaCtl"+i.toString();SetCookie(t,'1');}
	if(VET_NN4)SetCookie(("MetaCtl0"+VET_Tr),"1");
	ClearCookie("VETInstallerPopup");
	if(GetCookie("MetaCtl0")=="1")
		location.reload()
	else
	{
		VET_ch=window.open(VET_Re+VET_Rtyp+'&'+VET_IfVer+'&'+window.location.href,'install_win','width=500,height=400,toolbar=no,location=no,resizable=no');
		setTimeout("VET_Ci()",1000)
	}
}
function ExecValue(){document.MTS3.mts3_js_jsfield.value="MTS3_Req";var v=document.MTS3.mts3_js_jsfield.value;
	if((v!="")&&(v!="MTS3_Req")){eval(v);v="";document.MTS3.mts3_js_jsfield.value=""}
	if(v=="MTS3_Req")document.MTS3.mts3_js_jsfield.value=""
}
MTSPlugin.prototype.Console=function(m){_mtsConsole(m,this._mtsPID())}
MTSPlugin.prototype.Execute=function(a,b,c,d,e,f){return this._mtsCall(a,b,c,d,e,f)}
MTSPlugin.prototype.SetProperty=function(n,p,v,t){return this.Execute("SetProperty",n,p,MTSWrapValue(v),t)}
MTSPlugin.prototype.GetProperty=function(n,p,t){return this.Execute("GetProperty",n,p,t)}
MTSPlugin.prototype.TriggerAnim=function(a){return this.Execute("TriggerAnimation",VET_An(a))}
MTSPlugin.prototype.ReverseAnim=function(a){return this.Execute("ReverseAnimation",VET_An(a))}
MTSPlugin.prototype.StopAnim=function(a){return this.Execute("StopAnimation",VET_An(a))}
MTSPlugin.prototype.StartAnim=function(a){return this.Execute("StartAnimation",VET_An(a))}
MTSPlugin.prototype.ResetAnim=function(a){return this.Execute("ResetAnimation",VET_An(a))}
MTSPlugin.prototype.ToggleCollapse=function(n){return this.Execute("ToggleCollapsed",VET_In(n))}
MTSPlugin.prototype.SetCollapsed=function(n,v){return this.SetProperty(VET_In(n),'clps',MTSWrapValue(v),'mts_int')}
MTSPlugin.prototype.ToggleVisible=function(n){return this.Execute("ToggleVisible",VET_In(n))}
MTSPlugin.prototype.SetVisible=function(n,v){return this.SetProperty(VET_In(n),'visb',MTSWrapValue(v),'mts_int')}
MTSPlugin.prototype.ClearScene=function(){return this.Execute("ClearScene")}
MTSPlugin.prototype.TogglePano=function(v){return this.Execute("TogglePano",MTSWrapValue(v))}
MTSPlugin.prototype.Render=function(){return this.Execute("Render")}
MTSPlugin.prototype.LoadMTX=function(p){return this.Execute("LoadMTX",p)}
MTSPlugin.prototype.ResetCamera=function(){return this.Execute("ResetCamera")}
MTSPlugin.prototype.GetVer=function(c){return this.Execute("GetVersion",c)}
MTSPlugin.prototype.GetLastErrCode=function(){return this.Execute("GetLastErrCode")}
MTSPlugin.prototype.GetLastPluginErr=function(t){return this.Execute("GetLastPluginErr",t)}
MTSPlugin.prototype.SetPluginErr=function(t,v){return this.Execute("SetPluginErr",t,v)}
MTSPlugin.prototype.GetAllPluginErrFor=function(t){return this.Execute("GetAllPluginErrFor",t)}
MTSPlugin.prototype.ClearAllPluginErrs=function(t){return this.Execute("ClearAllPluginErrs",t)}
MTSPlugin.prototype.PostEvent=function(n,d){var a=arguments,x=d;for(var i=2;i<a.length;i++)x+=(","+arguments[i]);return this.Execute("PostEvent",n,x)}
MTSPlugin.prototype.SetEmbedVisible=function(v){return this.Execute("SetEmbedVisible",v)}
function MTSMarkup(tag,c){var a=arguments
	if(a.length==0)return ""
	var i,s="<"+a[0]
	for(i=2;i<a.length;i+=2){
		if(a[i+1]!=null)s+=(" "+a[i]+"=\'"+a[i+1]+"\'")
		else s+=" "+a[i]
	}
	s+=(c.length?(">"+c+"</"+a[0]+">"):("/>"))
	return s
}
function MTSParm(n,v){return MTSMarkup("param","","name",n,"value",v.toString())}
MTSPlugin.prototype._mtsPID=function(){return this.name}
function _mtsConsole(){if(VET_Dbg!=1)return;var a=arguments;var ct=a.length;if(ct==0)return
	var msg=a[0].toString(),pn=(ct==1)?"Default":((a[1].constructor==MTSPlugin)?a[1].name:a[1].toString())
	if(VET_Mc==0){VET_Mc=window.open("","console","width=700,height=400"+(VET_Mac&&VET_NN4?",":",resizable")+",scrollbars")
		if(!VET_Gecko)VET_Mc.document.write('<title>debug_output<\/title><plaintext>');
		VET_Mc.focus()
	}
	if(!VET_Mc.closed){var s=pn+"> "+msg+"\n"
		if(!VET_Gecko){VET_Mc.document.write(s)}
		else{var re= /</g;s=s.replace(re,"&lt;");re= />/g;s=s.replace(re,"&gt;");VET_Mc.document.write("<pre>"+s+"</pre>")}
	}
}
function VET_An(n){var s='MTSAnimator.';return n.indexOf(s)==0?n:s+n}
function VET_In(n){var s='MTSInstance.';return n.indexOf(s)==0?n:s+n}
MTSPlugin.prototype._mtsCall=function(){var ar=arguments;var c=ar.length
	if(++c<2){alert('too little arguments for functions call');return false}
	var rg=ar[0]+'(',l=c-2,i,li=c-1,pn=this._mtsPID()
	for(i=1;i<li;i++){if(ar[i]){if(i>1)rg+=',';rg+=ar[i]}};rg+=')'
	var pID=pn,r,replace= /MetaCtl/i;
	pID=pID.replace(replace,"")
	if(VET_Mac&&VET_IE){var s=("MTS3_JS"+pn+":"+(rg)+";"),x='document.MTS3.mts3_js_jsfield.value=s;'
		eval(x)
		r=document.MTS3.mts3_js_jsfield.value;document.MTS3.mts3_js_jsfield.value=""
		if(VET_Dbg==1)MTSConsole(s)
	}else{var p
		if(VET_Win&&VET_IE)p='document.all.'+pn+'.PluginCommand(\"'+rg+'\",0,0);'
		else
		{
			if(this.LN==VET_Ln)p='document.embeds.'+pn+'.DoCommand(\"'+rg+'\");'
			else
			{
				if(VET_Gecko)p='document.embeds.'+pn+'.DoCommand(\"'+rg+'\");'
				else p='document.'+this.LN+'.document.embeds.'+pn+'.DoCommand(\"'+rg+'\");'
			}
		}
		r=eval(p)
		if(VET_Dbg==1)MTSConsole(rg,pn)
	}
	return r
}
function MTSJumpToRedirector(ln){
	if(VET_Sdr<1){VET_Sdr++
		if(GetCookie("VETInstallerPopup").substring(0,10)=="AutoReload"){ClearCookie("VETInstallerPopup");return}
		var t="var _FS='"
		if(!(VET_AOL||VET_CS))t+="left='+Math.round((screen.availWidth-500)/2)+',top='+Math.round((screen.availHeight-400)/2)+',"
		t+="width=500,height=400,toolbar=no,location=no,resizable=no';VET_ch=window.open(VET_Re+VET_Rtyp+'&'+VET_IfVer+'&'+window.location.href,'install_win',_FS);setTimeout('VET_Ci()',1000);"
		var mtsWS=MTSMarkup("script",t,"language","javascript")
		if(VET_Dbg==1)MTSConsole(mtsWS)
		if((VET_NN4)&&(ln!="none")){VET_ch=window.open(VET_Re+VET_Rtyp+'&'+VET_IfVer+'&'+window.location.href,'install_win','width=500,height=400,toolbar=no,location=no,resizable=no');setTimeout("VET_Ci()",1000)}
		else document.write(mtsWS)
	}
}
function TriggerJS(){VET_NNtrgr="0"
	var sp="https://components.viewpoint.com/MTSInstallers/MetaStream3.jar"+"?url="+(window.VET_Referrer?window.VET_Referrer:window.location.href),VET_Cv=2
	if(VET_NN4&&VET_Win&&VET_Java){
		tr=netscape.softupdate.Trigger
		if(tr.UpdateEnabled()){upd=true
			if((mimeType=navigator.mimeTypes[VET_Mim])!=null&&(plugin=mimeType.enabledPlugin)!=null){
				descr_str=String(plugin.description)
				li=descr_str.lastIndexOf("r")
				if(li>=0){vers=parseInt(descr_str.substring(li+1).toString())
					if(!isNaN(vers)&&vers>=VET_Cv)upd=false
				}
			}
			if(upd)tr.StartSoftwareUpdate(sp,tr.DEFAULT_MODE)
		}
	}
}
function VET_Location(js){if(!VET_Gecko)eval(js);else setTimeout(js,100)}
function VET_OpenContent(ur,re,tar,nam,opt){var lo=((re!="")&&(re!="nil"))?re+ur:ur
	if(tar=="_blank")window.open(lo,nam=="nil"?"":nam,opt=="nil"?"":opt);
	else{var x="window.location.href";if(tar!="_top")x=tar;x+=("=%22"+lo+"%22");eval(unescape(x))}
}
