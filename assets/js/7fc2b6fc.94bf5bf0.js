"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1286],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=s,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,i=new Array(n);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},47575:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(87462),s=(r(67294),r(3905));const n={},i="Removes roles from a user",o={type:"api",id:"removes-roles-from-a-user",unversionedId:"removes-roles-from-a-user",title:"Removes roles from a user",description:"",slug:"/removes-roles-from-a-user",frontMatter:{},api:{description:"Remove roles from a user.",tags:["users"],parameters:[{name:"id",in:"path",description:"ID of the user to remove roles from.",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["roles"],properties:{roles:{type:"array",description:"List of roles IDs to remove from the user.",items:{type:"string",minLength:1}}}}},"application/x-www-form-urlencoded":{schema:{type:"object",required:["roles"],properties:{roles:{type:"array",description:"List of roles IDs to remove from the user.",items:{type:"string",minLength:1}}}}}}},responses:{204:{description:"Users roles successfully removed."},401:{description:"Invalid signature received for JSON Web Token validation."},403:{description:"Insufficient scope; expected any of: update:users."},429:{description:"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."}},operationId:"delete_user_roles",security:[{bearerAuth:[]},{oAuth2ClientCredentials:["update:users","delete:role_members"]}],method:"delete",path:"/users/{id}/roles",servers:[{url:"https://login0.local.dev.auth0.com/api/v2"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"jwt"},oAuth2ClientCredentials:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://login0.local.dev.auth0.com/oauth/token/","x-form-parameters":{audience:"https://login0.local.dev.auth0.com/api/v2/"},scopes:{"delete:actions":"Delete Actions","read:actions":"Read Actions","update:actions":"Update Actions","create:actions":"Create Actions","delete:anomaly_blocks":"Delete Anomaly Detection Blocks","read:anomaly_blocks":"Read Anomaly Detection Blocks","read:attack_protection":"Read attack protection","update:attack_protection":"Update attack protection","blacklist:tokens":"Blacklist Tokens","read:branding":"Read branding settings","update:branding":"Update branding settings","delete:branding":"Delete branding settings","delete:client_grants":"Delete Client Grants","read:client_grants":"Read Client Grants","update:client_grants":"Update Client Grants","create:client_grants":"Create Client Grants","delete:clients":"Delete Clients","read:clients":"Read Clients","update:clients":"Update Clients","create:clients":"Create Clients","delete:client_credentials":"Delete Client Credentials","read:client_credentials":"Read Client Credentials","update:client_credentials":"Update Client Credentials","create:client_credentials":"Create Client Credentials","delete:client_keys":"Delete Client Keys","read:client_keys":"Read Client Keys","update:client_keys":"Update Client Keys","create:client_keys":"Create Client Keys","delete:connections":"Delete Connections","read:connections":"Read Connections","update:connections":"Update Connections","create:connections":"Create Connections","delete:custom_domains":"Delete custom domain configurations","read:custom_domains":"Read custom domain configurations","update:custom_domains":"Update custom domain configurations","create:custom_domains":"Configure new custom domains","update:device_codes":"Update Device Codes","read:device_codes":"Read Device Codes","delete:device_credentials":"Delete Device Credentials","read:device_credentials":"Read Device Credentials","update:device_credentials":"Update Device Credentials","create:device_credentials":"Create Device Credentials","delete:current_user_device_credentials":"Delete Current User Device Credentials","read:current_user_device_credentials":"Read Current User Device Credentials","create:current_user_device_credentials":"Create Current User Device Credentials","delete:email_templates":"Delete email templates","read:email_templates":"Read email emplates","update:email_templates":"Update email templates","create:email_templates":"Create email templates","read:email_triggers":"Read email triggers","update:email_triggers":"Update email triggers","delete:email_provider":"Delete Email Provider","read:email_provider":"Read Email Provider","update:email_provider":"Update Email Provider","create:email_provider":"Create Email Provider","read:entitlements":"Read entitlements","delete:guardian_enrollments":"Delete Guardian enrollments","read:guardian_enrollments":"Read Guardian enrollments","create:guardian_enrollment_tickets":"Create enrollment tickets for Guardian","read:guardian_factors":"Read Guardian factors configuration","update:guardian_factors":"Update Guardian factors","read:grants":"Read User Grants","delete:grants":"Delete User Grants","delete:hooks":"Delete Hooks","read:hooks":"Read Hooks","update:hooks":"Update Hooks","create:hooks":"Create Hooks","read:insights":"Read Insights","delete:integrations":"Delete integrations","read:integrations":"Read integrations","update:integrations":"Update integrations","create:integrations":"Create integrations","read:limits":"Read entity limits","update:limits":"Update entity limits","read:log_streams":"Read log_streams","delete:log_streams":"Delete log_streams","update:log_streams":"Update log_streams","create:log_streams":"Create log_streams","read:logs":"Read Logs","read:logs_users":"Read logs relating to users","read:mfa_policies":"Read Multifactor Authentication policies","update:mfa_policies":"Update Multifactor Authentication policies","delete:organization_connections":"Delete organization connections","read:organization_connections":"Read organization connections","update:organization_connections":"Update organization connections","create:organization_connections":"Create organization connections","delete:organization_invitations":"Delete organization invitations","read:organization_invitations":"Read organization invitations","create:organization_invitations":"Create organization invitations","delete:organization_member_roles":"Delete organization member roles","read:organization_member_roles":"Read organization member roles","create:organization_member_roles":"Create organization member roles","delete:organizations":"Delete organizations","read:organizations":"Read organizations","create:organizations":"Create organizations","update:organizations":"Update organizations","delete:organization_members":"Delete organization members","read:organization_members":"Read organization members","create:organization_members":"Create organization members","read:organizations_summary":"Read organization summary","create:passwords_checking_job":"Create password checking jobs","delete:passwords_checking_job":"Deletes password checking job and all its resources","read:prompts":"Read prompts settings","update:prompts":"Update prompts settings","delete:requested_scopes":"Delete Requested Scopes","read:requested_scopes":"Read Requested Scopes","update:requested_scopes":"Update Requested Scopes","create:requested_scopes":"Create Requested Scopes","delete:resource_servers":"Delete Resource Servers","read:resource_servers":"Read Resource Servers","update:resource_servers":"Update Resource Servers","create:resource_servers":"Create Resource Servers","create:role_members":"Create role members","read:role_members":"Read role members","update:role_members":"Update role members","delete:role_members":"Delete role members","delete:roles":"Delete roles","read:roles":"Read roles","update:roles":"Update roles","create:roles":"Create roles","delete:rules":"Delete Rules","read:rules":"Read Rules","update:rules":"Update Rules","create:rules":"Create Rules","delete:rules_configs":"Delete Rules Configs","read:rules_configs":"Read Rules Configs","update:rules_configs":"Update Rules Configs","delete:signing_keys":"Delete signing keys","create:signing_keys":"Create signing keys","read:signing_keys":"Read signing keys","update:signing_keys":"Update signing keys","delete:shields":"Delete Shields","read:shields":"Read Shields","update:shields":"Update Shields","create:shields":"Create Shields","read:stats":"Read Stats","create:test_email_dispatch":"Create test email dispatch","read:tenant_settings":"Read Tenant Settings","update:tenant_settings":"Update Tenant Settings","read:triggers":"Read Triggers","update:triggers":"Update Triggers","create:user_tickets":"Create User Tickets","delete:users":"Delete Users","read:users":"Read Users","update:users":"Update Users","create:users":"Create Users","read:current_user":"Read Current User","delete:current_user":"Delete Current User","read:user_idp_tokens":"Read Users IDP tokens","delete:users_app_metadata":"Delete Users App Metadata","read:users_app_metadata":"Read Users App Metadata","update:users_app_metadata":"Update Users App Metadata","create:users_app_metadata":"Create Users App Metadata","delete:user_custom_blocks":"Delete Custom User Blocks","read:user_custom_blocks":"Read Custom User Blocks","create:user_custom_blocks":"Create Custom User Blocks","update:current_user_identities":"Update Current User Identities"}}}}},jsonRequestBodyExample:{roles:["string"]},info:{title:"Auth0 Management API",description:"Auth0 Management API v2.",termsOfService:"https://auth0.com/web-terms/",version:"2.0"},postman:{name:"Removes roles from a user",description:{content:"Remove roles from a user.",type:"text/plain"},url:{path:["users",":id","roles"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ID of the user to remove roles from.",type:"text/plain"},type:"any",value:"<string>",key:"id"}]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"}],method:"DELETE",body:{mode:"urlencoded",urlencoded:[{description:{content:"List of roles IDs to remove from the user.",type:"text/plain"},key:"roles",value:'["<string>","<string>"]'}]},auth:{type:"oauth2",oauth2:[]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/removes-roles-from-a-user",previous:{title:"Get a user's roles",permalink:"/api/get-a-users-roles"},next:{title:"Assign roles to a user",permalink:"/api/assign-roles-to-a-user"}},l=[],d={toc:l};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"removes-roles-from-a-user"},"Removes roles from a user"),(0,s.kt)("p",null,"Remove roles from a user."),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"ID of the user to remove roles from.")))))),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,s.kt)("div",null)))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"roles"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," 1 \u2264 length")),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"List of roles IDs to remove from the user.")))))),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{style:{display:"flex"}},(0,s.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,s.kt)("code",null,"204")),(0,s.kt)("div",null,(0,s.kt)("p",null,"Users roles successfully removed."))),(0,s.kt)("div",null))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{style:{display:"flex"}},(0,s.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,s.kt)("code",null,"401")),(0,s.kt)("div",null,(0,s.kt)("p",null,"Invalid signature received for JSON Web Token validation."))),(0,s.kt)("div",null))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{style:{display:"flex"}},(0,s.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,s.kt)("code",null,"403")),(0,s.kt)("div",null,(0,s.kt)("p",null,"Insufficient scope; expected any of: update:users."))),(0,s.kt)("div",null))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{style:{display:"flex"}},(0,s.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,s.kt)("code",null,"429")),(0,s.kt)("div",null,(0,s.kt)("p",null,"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."))),(0,s.kt)("div",null))))))}c.isMDXComponent=!0}}]);