"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=l,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32038:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const i={},r="Update an email template",o={type:"api",id:"update-an-email-template",unversionedId:"update-an-email-template",title:"Update an email template",description:"",slug:"/update-an-email-template",frontMatter:{},api:{description:"Update an email template.",tags:["email-templates"],parameters:[{name:"templateName",in:"path",description:"Template name. Can be `verify_email`, `verify_email_by_code`, `reset_email`, `welcome_email`, `blocked_account`, `stolen_credentials`, `enrollment_email`, `mfa_oob_code`, `user_invitation`, `change_password` (legacy), or `password_reset` (legacy).",required:!0,schema:{type:"string",enum:["verify_email","verify_email_by_code","reset_email","welcome_email","blocked_account","stolen_credentials","enrollment_email","mfa_oob_code","user_invitation","change_password","password_reset"]}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["template","body","from","subject","syntax","enabled"],properties:{template:{type:"string",description:"Template name. Can be `verify_email`, `verify_email_by_code`, `reset_email`, `welcome_email`, `blocked_account`, `stolen_credentials`, `enrollment_email`, `mfa_oob_code`, `user_invitation`, `change_password` (legacy), or `password_reset` (legacy).",default:"verify_email",enum:["verify_email","verify_email_by_code","reset_email","welcome_email","blocked_account","stolen_credentials","enrollment_email","mfa_oob_code","user_invitation","change_password","password_reset"]},body:{type:"string",description:"Body of the email template.",nullable:!0},from:{type:"string",description:"Senders `from` email address.",default:"sender@auth0.com",nullable:!0},resultUrl:{type:"string",description:"URL to redirect the user to after a successful action.",nullable:!0},subject:{type:"string",description:"Subject line of the email.",nullable:!0},syntax:{type:"string",description:"Syntax of the template body.",default:"liquid",nullable:!0},urlLifetimeInSeconds:{type:"number",description:"Lifetime in seconds that the link within the email will be valid for.",nullable:!0},includeEmailInRedirect:{type:"boolean",description:"Whether the `reset_email` and `verify_email` templates should include the user's email address as the `email` parameter in the returnUrl (true) or whether no email address should be included in the redirect (false). Defaults to true."},enabled:{type:"boolean",description:"Whether the template is enabled (true) or disabled (false).",nullable:!0}}}},"application/x-www-form-urlencoded":{schema:{type:"object",required:["template","body","from","subject","syntax","enabled"],properties:{template:{type:"string",description:"Template name. Can be `verify_email`, `verify_email_by_code`, `reset_email`, `welcome_email`, `blocked_account`, `stolen_credentials`, `enrollment_email`, `mfa_oob_code`, `user_invitation`, `change_password` (legacy), or `password_reset` (legacy).",default:"verify_email",enum:["verify_email","verify_email_by_code","reset_email","welcome_email","blocked_account","stolen_credentials","enrollment_email","mfa_oob_code","user_invitation","change_password","password_reset"]},body:{type:"string",description:"Body of the email template.",nullable:!0},from:{type:"string",description:"Senders `from` email address.",default:"sender@auth0.com",nullable:!0},resultUrl:{type:"string",description:"URL to redirect the user to after a successful action.",nullable:!0},subject:{type:"string",description:"Subject line of the email.",nullable:!0},syntax:{type:"string",description:"Syntax of the template body.",default:"liquid",nullable:!0},urlLifetimeInSeconds:{type:"number",description:"Lifetime in seconds that the link within the email will be valid for.",nullable:!0},includeEmailInRedirect:{type:"boolean",description:"Whether the `reset_email` and `verify_email` templates should include the user's email address as the `email` parameter in the returnUrl (true) or whether no email address should be included in the redirect (false). Defaults to true."},enabled:{type:"boolean",description:"Whether the template is enabled (true) or disabled (false).",nullable:!0}}}}}},responses:{200:{description:"Template successfully updated.",content:{"application/json":{schema:{type:"object",required:["template","body","from","subject","syntax","enabled"],properties:{template:{type:"string",description:"Template name. Can be `verify_email`, `verify_email_by_code`, `reset_email`, `welcome_email`, `blocked_account`, `stolen_credentials`, `enrollment_email`, `mfa_oob_code`, `user_invitation`, `change_password` (legacy), or `password_reset` (legacy).",default:"verify_email",enum:["verify_email","verify_email_by_code","reset_email","welcome_email","blocked_account","stolen_credentials","enrollment_email","mfa_oob_code","user_invitation","change_password","password_reset"]},body:{type:"string",description:"Body of the email template.",nullable:!0},from:{type:"string",description:"Senders `from` email address.",default:"sender@auth0.com",nullable:!0},resultUrl:{type:"string",description:"URL to redirect the user to after a successful action.",nullable:!0},subject:{type:"string",description:"Subject line of the email.",nullable:!0},syntax:{type:"string",description:"Syntax of the template body.",default:"liquid",nullable:!0},urlLifetimeInSeconds:{type:"number",description:"Lifetime in seconds that the link within the email will be valid for.",nullable:!0},includeEmailInRedirect:{type:"boolean",description:"Whether the `reset_email` and `verify_email` templates should include the user's email address as the `email` parameter in the returnUrl (true) or whether no email address should be included in the redirect (false). Defaults to true."},enabled:{type:"boolean",description:"Whether the template is enabled (true) or disabled (false).",nullable:!0}}}}}},400:{description:"Invalid request body. The message will vary depending on the cause."},401:{description:"Invalid signature received for JSON Web Token validation."},403:{description:"Insufficient scope; expected: update:email_templates."},404:{description:"Template not found."},429:{description:"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."}},operationId:"put_email-templates_by_templateName",security:[{bearerAuth:[]},{oAuth2ClientCredentials:["update:email_templates"]}],method:"put",path:"/email-templates/{templateName}",servers:[{url:"https://login0.local.dev.auth0.com/api/v2"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"jwt"},oAuth2ClientCredentials:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://login0.local.dev.auth0.com/oauth/token/","x-form-parameters":{audience:"https://login0.local.dev.auth0.com/api/v2/"},scopes:{"delete:actions":"Delete Actions","read:actions":"Read Actions","update:actions":"Update Actions","create:actions":"Create Actions","delete:anomaly_blocks":"Delete Anomaly Detection Blocks","read:anomaly_blocks":"Read Anomaly Detection Blocks","read:attack_protection":"Read attack protection","update:attack_protection":"Update attack protection","blacklist:tokens":"Blacklist Tokens","read:branding":"Read branding settings","update:branding":"Update branding settings","delete:branding":"Delete branding settings","delete:client_grants":"Delete Client Grants","read:client_grants":"Read Client Grants","update:client_grants":"Update Client Grants","create:client_grants":"Create Client Grants","delete:clients":"Delete Clients","read:clients":"Read Clients","update:clients":"Update Clients","create:clients":"Create Clients","delete:client_credentials":"Delete Client Credentials","read:client_credentials":"Read Client Credentials","update:client_credentials":"Update Client Credentials","create:client_credentials":"Create Client Credentials","delete:client_keys":"Delete Client Keys","read:client_keys":"Read Client Keys","update:client_keys":"Update Client Keys","create:client_keys":"Create Client Keys","delete:connections":"Delete Connections","read:connections":"Read Connections","update:connections":"Update Connections","create:connections":"Create Connections","delete:custom_domains":"Delete custom domain configurations","read:custom_domains":"Read custom domain configurations","update:custom_domains":"Update custom domain configurations","create:custom_domains":"Configure new custom domains","update:device_codes":"Update Device Codes","read:device_codes":"Read Device Codes","delete:device_credentials":"Delete Device Credentials","read:device_credentials":"Read Device Credentials","update:device_credentials":"Update Device Credentials","create:device_credentials":"Create Device Credentials","delete:current_user_device_credentials":"Delete Current User Device Credentials","read:current_user_device_credentials":"Read Current User Device Credentials","create:current_user_device_credentials":"Create Current User Device Credentials","delete:email_templates":"Delete email templates","read:email_templates":"Read email emplates","update:email_templates":"Update email templates","create:email_templates":"Create email templates","read:email_triggers":"Read email triggers","update:email_triggers":"Update email triggers","delete:email_provider":"Delete Email Provider","read:email_provider":"Read Email Provider","update:email_provider":"Update Email Provider","create:email_provider":"Create Email Provider","read:entitlements":"Read entitlements","delete:guardian_enrollments":"Delete Guardian enrollments","read:guardian_enrollments":"Read Guardian enrollments","create:guardian_enrollment_tickets":"Create enrollment tickets for Guardian","read:guardian_factors":"Read Guardian factors configuration","update:guardian_factors":"Update Guardian factors","read:grants":"Read User Grants","delete:grants":"Delete User Grants","delete:hooks":"Delete Hooks","read:hooks":"Read Hooks","update:hooks":"Update Hooks","create:hooks":"Create Hooks","read:insights":"Read Insights","delete:integrations":"Delete integrations","read:integrations":"Read integrations","update:integrations":"Update integrations","create:integrations":"Create integrations","read:limits":"Read entity limits","update:limits":"Update entity limits","read:log_streams":"Read log_streams","delete:log_streams":"Delete log_streams","update:log_streams":"Update log_streams","create:log_streams":"Create log_streams","read:logs":"Read Logs","read:logs_users":"Read logs relating to users","read:mfa_policies":"Read Multifactor Authentication policies","update:mfa_policies":"Update Multifactor Authentication policies","delete:organization_connections":"Delete organization connections","read:organization_connections":"Read organization connections","update:organization_connections":"Update organization connections","create:organization_connections":"Create organization connections","delete:organization_invitations":"Delete organization invitations","read:organization_invitations":"Read organization invitations","create:organization_invitations":"Create organization invitations","delete:organization_member_roles":"Delete organization member roles","read:organization_member_roles":"Read organization member roles","create:organization_member_roles":"Create organization member roles","delete:organizations":"Delete organizations","read:organizations":"Read organizations","create:organizations":"Create organizations","update:organizations":"Update organizations","delete:organization_members":"Delete organization members","read:organization_members":"Read organization members","create:organization_members":"Create organization members","read:organizations_summary":"Read organization summary","create:passwords_checking_job":"Create password checking jobs","delete:passwords_checking_job":"Deletes password checking job and all its resources","read:prompts":"Read prompts settings","update:prompts":"Update prompts settings","delete:requested_scopes":"Delete Requested Scopes","read:requested_scopes":"Read Requested Scopes","update:requested_scopes":"Update Requested Scopes","create:requested_scopes":"Create Requested Scopes","delete:resource_servers":"Delete Resource Servers","read:resource_servers":"Read Resource Servers","update:resource_servers":"Update Resource Servers","create:resource_servers":"Create Resource Servers","create:role_members":"Create role members","read:role_members":"Read role members","update:role_members":"Update role members","delete:role_members":"Delete role members","delete:roles":"Delete roles","read:roles":"Read roles","update:roles":"Update roles","create:roles":"Create roles","delete:rules":"Delete Rules","read:rules":"Read Rules","update:rules":"Update Rules","create:rules":"Create Rules","delete:rules_configs":"Delete Rules Configs","read:rules_configs":"Read Rules Configs","update:rules_configs":"Update Rules Configs","delete:signing_keys":"Delete signing keys","create:signing_keys":"Create signing keys","read:signing_keys":"Read signing keys","update:signing_keys":"Update signing keys","delete:shields":"Delete Shields","read:shields":"Read Shields","update:shields":"Update Shields","create:shields":"Create Shields","read:stats":"Read Stats","create:test_email_dispatch":"Create test email dispatch","read:tenant_settings":"Read Tenant Settings","update:tenant_settings":"Update Tenant Settings","read:triggers":"Read Triggers","update:triggers":"Update Triggers","create:user_tickets":"Create User Tickets","delete:users":"Delete Users","read:users":"Read Users","update:users":"Update Users","create:users":"Create Users","read:current_user":"Read Current User","delete:current_user":"Delete Current User","read:user_idp_tokens":"Read Users IDP tokens","delete:users_app_metadata":"Delete Users App Metadata","read:users_app_metadata":"Read Users App Metadata","update:users_app_metadata":"Update Users App Metadata","create:users_app_metadata":"Create Users App Metadata","delete:user_custom_blocks":"Delete Custom User Blocks","read:user_custom_blocks":"Read Custom User Blocks","create:user_custom_blocks":"Create Custom User Blocks","update:current_user_identities":"Update Current User Identities"}}}}},jsonRequestBodyExample:{template:"verify_email",body:"string",from:"string",resultUrl:"string",subject:"string",syntax:"string",urlLifetimeInSeconds:0,includeEmailInRedirect:!0,enabled:!0},info:{title:"Auth0 Management API",description:"Auth0 Management API v2.",termsOfService:"https://auth0.com/web-terms/",version:"2.0"},postman:{name:"Update an email template",description:{content:"Update an email template.",type:"text/plain"},url:{path:["email-templates",":templateName"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) Template name. Can be `verify_email`, `verify_email_by_code`, `reset_email`, `welcome_email`, `blocked_account`, `stolen_credentials`, `enrollment_email`, `mfa_oob_code`, `user_invitation`, `change_password` (legacy), or `password_reset` (legacy).",type:"text/plain"},type:"any",value:"<string>",key:"templateName"}]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"}],method:"PUT",body:{mode:"urlencoded",urlencoded:[{description:{content:"Template name. Can be `verify_email`, `verify_email_by_code`, `reset_email`, `welcome_email`, `blocked_account`, `stolen_credentials`, `enrollment_email`, `mfa_oob_code`, `user_invitation`, `change_password` (legacy), or `password_reset` (legacy). (This can only be one of verify_email,verify_email_by_code,reset_email,welcome_email,blocked_account,stolen_credentials,enrollment_email,mfa_oob_code,user_invitation,change_password,password_reset)",type:"text/plain"},key:"template",value:"verify_email"},{description:{content:"Body of the email template.",type:"text/plain"},key:"body",value:"<string>"},{description:{content:"Senders `from` email address.",type:"text/plain"},key:"from",value:"sender@auth0.com"},{description:{content:"Subject line of the email.",type:"text/plain"},key:"subject",value:"<string>"},{description:{content:"Syntax of the template body.",type:"text/plain"},key:"syntax",value:"liquid"},{description:{content:"Whether the template is enabled (true) or disabled (false).",type:"text/plain"},key:"enabled",value:"<boolean>"},{description:{content:"URL to redirect the user to after a successful action.",type:"text/plain"},key:"resultUrl",value:"<string>"},{description:{content:"Lifetime in seconds that the link within the email will be valid for.",type:"text/plain"},key:"urlLifetimeInSeconds",value:"<number>"},{description:{content:"Whether the `reset_email` and `verify_email` templates should include the user's email address as the `email` parameter in the returnUrl (true) or whether no email address should be included in the redirect (false). Defaults to true.",type:"text/plain"},key:"includeEmailInRedirect",value:"<boolean>"}]},auth:{type:"oauth2",oauth2:[]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/update-an-email-template",previous:{title:"Patch an email template",permalink:"/api/patch-an-email-template"},next:{title:"Get the email provider",permalink:"/api/get-the-email-provider"}},s=[],d={toc:s};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"update-an-email-template"},"Update an email template"),(0,l.kt)("p",null,"Update an email template."),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"templateName"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email_by_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reset_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"welcome_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"blocked_account"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stolen_credentials"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enrollment_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mfa_oob_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user_invitation"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"change_password"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password_reset"),"]")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Template name. Can be ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email_by_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reset_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"welcome_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"blocked_account"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stolen_credentials"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enrollment_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mfa_oob_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user_invitation"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"change_password")," (legacy), or ",(0,l.kt)("inlineCode",{parentName:"p"},"password_reset")," (legacy).")))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"template"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email_by_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reset_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"welcome_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"blocked_account"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stolen_credentials"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enrollment_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mfa_oob_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user_invitation"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"change_password"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password_reset"),"]")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Template name. Can be ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email_by_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reset_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"welcome_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"blocked_account"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stolen_credentials"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enrollment_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mfa_oob_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user_invitation"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"change_password")," (legacy), or ",(0,l.kt)("inlineCode",{parentName:"p"},"password_reset")," (legacy).")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"body"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Body of the email template.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"from"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Senders ",(0,l.kt)("inlineCode",{parentName:"p"},"from")," email address.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"resultUrl"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"URL to redirect the user to after a successful action.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"subject"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Subject line of the email.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"syntax"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Syntax of the template body.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"urlLifetimeInSeconds"),(0,l.kt)("span",{style:{opacity:"0.6"}}," number"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Lifetime in seconds that the link within the email will be valid for.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"includeEmailInRedirect"),(0,l.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"reset_email")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email")," templates should include the user's email address as the ",(0,l.kt)("inlineCode",{parentName:"p"},"email")," parameter in the returnUrl (true) or whether no email address should be included in the redirect (false). Defaults to true.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"enabled"),(0,l.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Whether the template is enabled (true) or disabled (false).")))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Template successfully updated."))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"template"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email_by_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reset_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"welcome_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"blocked_account"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stolen_credentials"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enrollment_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mfa_oob_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user_invitation"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"change_password"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password_reset"),"]")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Template name. Can be ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email_by_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reset_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"welcome_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"blocked_account"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stolen_credentials"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enrollment_email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mfa_oob_code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user_invitation"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"change_password")," (legacy), or ",(0,l.kt)("inlineCode",{parentName:"p"},"password_reset")," (legacy).")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"body"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Body of the email template.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"from"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Senders ",(0,l.kt)("inlineCode",{parentName:"p"},"from")," email address.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"resultUrl"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"URL to redirect the user to after a successful action.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"subject"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Subject line of the email.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"syntax"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Syntax of the template body.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"urlLifetimeInSeconds"),(0,l.kt)("span",{style:{opacity:"0.6"}}," number"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Lifetime in seconds that the link within the email will be valid for.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"includeEmailInRedirect"),(0,l.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"reset_email")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"verify_email")," templates should include the user's email address as the ",(0,l.kt)("inlineCode",{parentName:"p"},"email")," parameter in the returnUrl (true) or whether no email address should be included in the redirect (false). Defaults to true.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"enabled"),(0,l.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Whether the template is enabled (true) or disabled (false)."))))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"400")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Invalid request body. The message will vary depending on the cause."))),(0,l.kt)("div",null))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"401")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Invalid signature received for JSON Web Token validation."))),(0,l.kt)("div",null))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"403")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Insufficient scope; expected: update:email_templates."))),(0,l.kt)("div",null))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"404")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Template not found."))),(0,l.kt)("div",null))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"429")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."))),(0,l.kt)("div",null))))))}p.isMDXComponent=!0}}]);