"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6740],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15077:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={},s="Get hooks",l={type:"api",id:"get-hooks",unversionedId:"get-hooks",title:"Get hooks",description:"",slug:"/get-hooks",frontMatter:{},api:{description:'Retrieve all <a href="https://auth0.com/docs/hooks">hooks</a>. Accepts a list of fields to include or exclude in the result.\\n',tags:["hooks"],parameters:[{name:"page",in:"query",description:"Page index of the results to return. First page is 0.",schema:{type:"integer",minimum:0}},{name:"per_page",in:"query",description:"Number of results per page. Paging is disabled if parameter not sent.",schema:{type:"integer",maximum:100,minimum:0}},{name:"include_totals",in:"query",description:"Return results inside an object that contains the total result count (true) or as a direct array of results (false, default).",schema:{type:"boolean"}},{name:"enabled",in:"query",description:"Optional filter on whether a hook is enabled (true) or disabled (false).",schema:{type:"boolean"}},{name:"fields",in:"query",description:"Comma-separated list of fields to include in the result. Leave empty to retrieve all fields.",schema:{type:"string",pattern:"^((id)|(name)|(script)|(dependencies)|(enabled)|(triggerId))(,((id)|(name)|(script)|(dependencies)|(enabled)|(triggerId)))*$"}},{name:"triggerId",in:"query",description:"Retrieves hooks that match the trigger",schema:{type:"string",enum:["credentials-exchange","pre-user-registration","post-user-registration","post-change-password","send-phone-message"]}}],responses:{200:{description:"Hooks successfully retrieved.",content:{"application/json":{schema:{oneOf:[{type:"array",items:{type:"object",properties:{triggerId:{type:"string",description:"Trigger ID"},id:{type:"string",description:"ID of this hook.",default:"00001"},name:{type:"string",description:"Name of this hook.",default:"hook"},enabled:{type:"boolean",description:"Whether this hook will be executed (true) or ignored (false).",default:!0},script:{type:"string",description:"Code to be executed when this hook runs.",default:"module.exports = function(client, scope, audience, context, cb) cb(null, access_token); };"},dependencies:{type:"object",description:"Dependencies of this hook used by webtask server.",additionalProperties:{}}}}},{type:"object",properties:{start:{type:"number"},limit:{type:"number"},total:{type:"number"},hooks:{type:"array",items:{type:"object",properties:{triggerId:{type:"string",description:"Trigger ID"},id:{type:"string",description:"ID of this hook.",default:"00001"},name:{type:"string",description:"Name of this hook.",default:"hook"},enabled:{type:"boolean",description:"Whether this hook will be executed (true) or ignored (false).",default:!0},script:{type:"string",description:"Code to be executed when this hook runs.",default:"module.exports = function(client, scope, audience, context, cb) cb(null, access_token); };"},dependencies:{type:"object",description:"Dependencies of this hook used by webtask server.",additionalProperties:{}}}}}}}]}}}},400:{description:"Invalid request query string. The message will vary depending on the cause."},401:{description:"Invalid signature received for JSON Web Token validation."},403:{description:"Insufficient scope; expected any of: read:hooks."},404:{description:"Hook not found."},429:{description:"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."}},operationId:"get_hooks",security:[{bearerAuth:[]},{oAuth2ClientCredentials:["read:hooks"]}],method:"get",path:"/hooks",servers:[{url:"https://login0.local.dev.auth0.com/api/v2"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"jwt"},oAuth2ClientCredentials:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://login0.local.dev.auth0.com/oauth/token/","x-form-parameters":{audience:"https://login0.local.dev.auth0.com/api/v2/"},scopes:{"delete:actions":"Delete Actions","read:actions":"Read Actions","update:actions":"Update Actions","create:actions":"Create Actions","delete:anomaly_blocks":"Delete Anomaly Detection Blocks","read:anomaly_blocks":"Read Anomaly Detection Blocks","read:attack_protection":"Read attack protection","update:attack_protection":"Update attack protection","blacklist:tokens":"Blacklist Tokens","read:branding":"Read branding settings","update:branding":"Update branding settings","delete:branding":"Delete branding settings","delete:client_grants":"Delete Client Grants","read:client_grants":"Read Client Grants","update:client_grants":"Update Client Grants","create:client_grants":"Create Client Grants","delete:clients":"Delete Clients","read:clients":"Read Clients","update:clients":"Update Clients","create:clients":"Create Clients","delete:client_credentials":"Delete Client Credentials","read:client_credentials":"Read Client Credentials","update:client_credentials":"Update Client Credentials","create:client_credentials":"Create Client Credentials","delete:client_keys":"Delete Client Keys","read:client_keys":"Read Client Keys","update:client_keys":"Update Client Keys","create:client_keys":"Create Client Keys","delete:connections":"Delete Connections","read:connections":"Read Connections","update:connections":"Update Connections","create:connections":"Create Connections","delete:custom_domains":"Delete custom domain configurations","read:custom_domains":"Read custom domain configurations","update:custom_domains":"Update custom domain configurations","create:custom_domains":"Configure new custom domains","update:device_codes":"Update Device Codes","read:device_codes":"Read Device Codes","delete:device_credentials":"Delete Device Credentials","read:device_credentials":"Read Device Credentials","update:device_credentials":"Update Device Credentials","create:device_credentials":"Create Device Credentials","delete:current_user_device_credentials":"Delete Current User Device Credentials","read:current_user_device_credentials":"Read Current User Device Credentials","create:current_user_device_credentials":"Create Current User Device Credentials","delete:email_templates":"Delete email templates","read:email_templates":"Read email emplates","update:email_templates":"Update email templates","create:email_templates":"Create email templates","read:email_triggers":"Read email triggers","update:email_triggers":"Update email triggers","delete:email_provider":"Delete Email Provider","read:email_provider":"Read Email Provider","update:email_provider":"Update Email Provider","create:email_provider":"Create Email Provider","read:entitlements":"Read entitlements","delete:guardian_enrollments":"Delete Guardian enrollments","read:guardian_enrollments":"Read Guardian enrollments","create:guardian_enrollment_tickets":"Create enrollment tickets for Guardian","read:guardian_factors":"Read Guardian factors configuration","update:guardian_factors":"Update Guardian factors","read:grants":"Read User Grants","delete:grants":"Delete User Grants","delete:hooks":"Delete Hooks","read:hooks":"Read Hooks","update:hooks":"Update Hooks","create:hooks":"Create Hooks","read:insights":"Read Insights","delete:integrations":"Delete integrations","read:integrations":"Read integrations","update:integrations":"Update integrations","create:integrations":"Create integrations","read:limits":"Read entity limits","update:limits":"Update entity limits","read:log_streams":"Read log_streams","delete:log_streams":"Delete log_streams","update:log_streams":"Update log_streams","create:log_streams":"Create log_streams","read:logs":"Read Logs","read:logs_users":"Read logs relating to users","read:mfa_policies":"Read Multifactor Authentication policies","update:mfa_policies":"Update Multifactor Authentication policies","delete:organization_connections":"Delete organization connections","read:organization_connections":"Read organization connections","update:organization_connections":"Update organization connections","create:organization_connections":"Create organization connections","delete:organization_invitations":"Delete organization invitations","read:organization_invitations":"Read organization invitations","create:organization_invitations":"Create organization invitations","delete:organization_member_roles":"Delete organization member roles","read:organization_member_roles":"Read organization member roles","create:organization_member_roles":"Create organization member roles","delete:organizations":"Delete organizations","read:organizations":"Read organizations","create:organizations":"Create organizations","update:organizations":"Update organizations","delete:organization_members":"Delete organization members","read:organization_members":"Read organization members","create:organization_members":"Create organization members","read:organizations_summary":"Read organization summary","create:passwords_checking_job":"Create password checking jobs","delete:passwords_checking_job":"Deletes password checking job and all its resources","read:prompts":"Read prompts settings","update:prompts":"Update prompts settings","delete:requested_scopes":"Delete Requested Scopes","read:requested_scopes":"Read Requested Scopes","update:requested_scopes":"Update Requested Scopes","create:requested_scopes":"Create Requested Scopes","delete:resource_servers":"Delete Resource Servers","read:resource_servers":"Read Resource Servers","update:resource_servers":"Update Resource Servers","create:resource_servers":"Create Resource Servers","create:role_members":"Create role members","read:role_members":"Read role members","update:role_members":"Update role members","delete:role_members":"Delete role members","delete:roles":"Delete roles","read:roles":"Read roles","update:roles":"Update roles","create:roles":"Create roles","delete:rules":"Delete Rules","read:rules":"Read Rules","update:rules":"Update Rules","create:rules":"Create Rules","delete:rules_configs":"Delete Rules Configs","read:rules_configs":"Read Rules Configs","update:rules_configs":"Update Rules Configs","delete:signing_keys":"Delete signing keys","create:signing_keys":"Create signing keys","read:signing_keys":"Read signing keys","update:signing_keys":"Update signing keys","delete:shields":"Delete Shields","read:shields":"Read Shields","update:shields":"Update Shields","create:shields":"Create Shields","read:stats":"Read Stats","create:test_email_dispatch":"Create test email dispatch","read:tenant_settings":"Read Tenant Settings","update:tenant_settings":"Update Tenant Settings","read:triggers":"Read Triggers","update:triggers":"Update Triggers","create:user_tickets":"Create User Tickets","delete:users":"Delete Users","read:users":"Read Users","update:users":"Update Users","create:users":"Create Users","read:current_user":"Read Current User","delete:current_user":"Delete Current User","read:user_idp_tokens":"Read Users IDP tokens","delete:users_app_metadata":"Delete Users App Metadata","read:users_app_metadata":"Read Users App Metadata","update:users_app_metadata":"Update Users App Metadata","create:users_app_metadata":"Create Users App Metadata","delete:user_custom_blocks":"Delete Custom User Blocks","read:user_custom_blocks":"Read Custom User Blocks","create:user_custom_blocks":"Create Custom User Blocks","update:current_user_identities":"Update Current User Identities"}}}}},info:{title:"Auth0 Management API",description:"Auth0 Management API v2.",termsOfService:"https://auth0.com/web-terms/",version:"2.0"},postman:{name:"Get hooks",description:{content:'Retrieve all <a href="https://auth0.com/docs/hooks">hooks</a>. Accepts a list of fields to include or exclude in the result.\\n',type:"text/plain"},url:{path:["hooks"],host:["{{baseUrl}}"],query:[{description:{content:"Page index of the results to return. First page is 0.",type:"text/plain"},key:"page",value:"<integer>"},{description:{content:"Number of results per page. Paging is disabled if parameter not sent.",type:"text/plain"},key:"per_page",value:"<integer>"},{description:{content:"Return results inside an object that contains the total result count (true) or as a direct array of results (false, default).",type:"text/plain"},key:"include_totals",value:"<boolean>"},{description:{content:"Optional filter on whether a hook is enabled (true) or disabled (false).",type:"text/plain"},key:"enabled",value:"<boolean>"},{description:{content:"Comma-separated list of fields to include in the result. Leave empty to retrieve all fields.",type:"text/plain"},key:"fields",value:"<string>"},{description:{content:"Retrieves hooks that match the trigger",type:"text/plain"},key:"triggerId",value:"<string>"}],variable:[]},method:"GET",auth:{type:"oauth2",oauth2:[]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/get-hooks",previous:{title:"Set the Multi-factor Authentication policies",permalink:"/api/set-the-multi-factor-authentication-policies"},next:{title:"Create a hook",permalink:"/api/create-a-hook"}},o=[],d={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-hooks"},"Get hooks"),(0,n.kt)("p",null,"Retrieve all ",(0,n.kt)("a",{href:"https://auth0.com/docs/hooks"},"hooks"),". Accepts a list of fields to include or exclude in the result.\\n"),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"page"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Page index of the results to return. First page is 0.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"per_page"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible values:")," value \u2264 100")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Number of results per page. Paging is disabled if parameter not sent.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"include_totals"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Return results inside an object that contains the total result count (true) or as a direct array of results (false, default).")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"enabled"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Optional filter on whether a hook is enabled (true) or disabled (false).")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"fields"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible values:")," Value must match regular expression ",(0,n.kt)("inlineCode",{parentName:"p"},"^((id)|(name)|(script)|(dependencies)|(enabled)|(triggerId))(,((id)|(name)|(script)|(dependencies)|(enabled)|(triggerId)))*$"))),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Comma-separated list of fields to include in the result. Leave empty to retrieve all fields.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"triggerId"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,n.kt)("inlineCode",{parentName:"p"},"credentials-exchange"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"pre-user-registration"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"post-user-registration"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"post-change-password"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"send-phone-message"),"]")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Retrieves hooks that match the trigger")))))),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"200")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Hooks successfully retrieved."))),(0,n.kt)("div",null,(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,n.kt)("div",null)))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("span",{style:{opacity:"0.6"}}," undefined")))))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"400")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Invalid request query string. The message will vary depending on the cause."))),(0,n.kt)("div",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"401")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Invalid signature received for JSON Web Token validation."))),(0,n.kt)("div",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"403")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Insufficient scope; expected any of: read:hooks."))),(0,n.kt)("div",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"404")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Hook not found."))),(0,n.kt)("div",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"429")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."))),(0,n.kt)("div",null))))))}c.isMDXComponent=!0}}]);