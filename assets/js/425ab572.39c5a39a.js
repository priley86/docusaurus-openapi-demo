"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2862],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88895:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},s="Delete organization",o={type:"api",id:"delete-organization",unversionedId:"delete-organization",title:"Delete organization",description:"",slug:"/delete-organization",frontMatter:{},api:{description:"Delete a specific organization\\n",tags:["organizations"],parameters:[{name:"id",in:"path",description:"Organization identifier",required:!0,schema:{type:"string"}}],responses:{204:{description:"The organization was deleted."},400:{description:"Invalid request URI. The message will vary depending on the cause."},401:{description:"Invalid signature received for JSON Web Token validation."},403:{description:"Insufficient scope; expected any of: delete:organizations."},404:{description:"The organization does not exist."},429:{description:"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."}},operationId:"delete_organizations_by_id",security:[{bearerAuth:[]},{oAuth2ClientCredentials:["delete:organizations"]}],method:"delete",path:"/organizations/{id}",servers:[{url:"https://login0.local.dev.auth0.com/api/v2"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"jwt"},oAuth2ClientCredentials:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://login0.local.dev.auth0.com/oauth/token/","x-form-parameters":{audience:"https://login0.local.dev.auth0.com/api/v2/"},scopes:{"delete:actions":"Delete Actions","read:actions":"Read Actions","update:actions":"Update Actions","create:actions":"Create Actions","delete:anomaly_blocks":"Delete Anomaly Detection Blocks","read:anomaly_blocks":"Read Anomaly Detection Blocks","read:attack_protection":"Read attack protection","update:attack_protection":"Update attack protection","blacklist:tokens":"Blacklist Tokens","read:branding":"Read branding settings","update:branding":"Update branding settings","delete:branding":"Delete branding settings","delete:client_grants":"Delete Client Grants","read:client_grants":"Read Client Grants","update:client_grants":"Update Client Grants","create:client_grants":"Create Client Grants","delete:clients":"Delete Clients","read:clients":"Read Clients","update:clients":"Update Clients","create:clients":"Create Clients","delete:client_credentials":"Delete Client Credentials","read:client_credentials":"Read Client Credentials","update:client_credentials":"Update Client Credentials","create:client_credentials":"Create Client Credentials","delete:client_keys":"Delete Client Keys","read:client_keys":"Read Client Keys","update:client_keys":"Update Client Keys","create:client_keys":"Create Client Keys","delete:connections":"Delete Connections","read:connections":"Read Connections","update:connections":"Update Connections","create:connections":"Create Connections","delete:custom_domains":"Delete custom domain configurations","read:custom_domains":"Read custom domain configurations","update:custom_domains":"Update custom domain configurations","create:custom_domains":"Configure new custom domains","update:device_codes":"Update Device Codes","read:device_codes":"Read Device Codes","delete:device_credentials":"Delete Device Credentials","read:device_credentials":"Read Device Credentials","update:device_credentials":"Update Device Credentials","create:device_credentials":"Create Device Credentials","delete:current_user_device_credentials":"Delete Current User Device Credentials","read:current_user_device_credentials":"Read Current User Device Credentials","create:current_user_device_credentials":"Create Current User Device Credentials","delete:email_templates":"Delete email templates","read:email_templates":"Read email emplates","update:email_templates":"Update email templates","create:email_templates":"Create email templates","read:email_triggers":"Read email triggers","update:email_triggers":"Update email triggers","delete:email_provider":"Delete Email Provider","read:email_provider":"Read Email Provider","update:email_provider":"Update Email Provider","create:email_provider":"Create Email Provider","read:entitlements":"Read entitlements","delete:guardian_enrollments":"Delete Guardian enrollments","read:guardian_enrollments":"Read Guardian enrollments","create:guardian_enrollment_tickets":"Create enrollment tickets for Guardian","read:guardian_factors":"Read Guardian factors configuration","update:guardian_factors":"Update Guardian factors","read:grants":"Read User Grants","delete:grants":"Delete User Grants","delete:hooks":"Delete Hooks","read:hooks":"Read Hooks","update:hooks":"Update Hooks","create:hooks":"Create Hooks","read:insights":"Read Insights","delete:integrations":"Delete integrations","read:integrations":"Read integrations","update:integrations":"Update integrations","create:integrations":"Create integrations","read:limits":"Read entity limits","update:limits":"Update entity limits","read:log_streams":"Read log_streams","delete:log_streams":"Delete log_streams","update:log_streams":"Update log_streams","create:log_streams":"Create log_streams","read:logs":"Read Logs","read:logs_users":"Read logs relating to users","read:mfa_policies":"Read Multifactor Authentication policies","update:mfa_policies":"Update Multifactor Authentication policies","delete:organization_connections":"Delete organization connections","read:organization_connections":"Read organization connections","update:organization_connections":"Update organization connections","create:organization_connections":"Create organization connections","delete:organization_invitations":"Delete organization invitations","read:organization_invitations":"Read organization invitations","create:organization_invitations":"Create organization invitations","delete:organization_member_roles":"Delete organization member roles","read:organization_member_roles":"Read organization member roles","create:organization_member_roles":"Create organization member roles","delete:organizations":"Delete organizations","read:organizations":"Read organizations","create:organizations":"Create organizations","update:organizations":"Update organizations","delete:organization_members":"Delete organization members","read:organization_members":"Read organization members","create:organization_members":"Create organization members","read:organizations_summary":"Read organization summary","create:passwords_checking_job":"Create password checking jobs","delete:passwords_checking_job":"Deletes password checking job and all its resources","read:prompts":"Read prompts settings","update:prompts":"Update prompts settings","delete:requested_scopes":"Delete Requested Scopes","read:requested_scopes":"Read Requested Scopes","update:requested_scopes":"Update Requested Scopes","create:requested_scopes":"Create Requested Scopes","delete:resource_servers":"Delete Resource Servers","read:resource_servers":"Read Resource Servers","update:resource_servers":"Update Resource Servers","create:resource_servers":"Create Resource Servers","create:role_members":"Create role members","read:role_members":"Read role members","update:role_members":"Update role members","delete:role_members":"Delete role members","delete:roles":"Delete roles","read:roles":"Read roles","update:roles":"Update roles","create:roles":"Create roles","delete:rules":"Delete Rules","read:rules":"Read Rules","update:rules":"Update Rules","create:rules":"Create Rules","delete:rules_configs":"Delete Rules Configs","read:rules_configs":"Read Rules Configs","update:rules_configs":"Update Rules Configs","delete:signing_keys":"Delete signing keys","create:signing_keys":"Create signing keys","read:signing_keys":"Read signing keys","update:signing_keys":"Update signing keys","delete:shields":"Delete Shields","read:shields":"Read Shields","update:shields":"Update Shields","create:shields":"Create Shields","read:stats":"Read Stats","create:test_email_dispatch":"Create test email dispatch","read:tenant_settings":"Read Tenant Settings","update:tenant_settings":"Update Tenant Settings","read:triggers":"Read Triggers","update:triggers":"Update Triggers","create:user_tickets":"Create User Tickets","delete:users":"Delete Users","read:users":"Read Users","update:users":"Update Users","create:users":"Create Users","read:current_user":"Read Current User","delete:current_user":"Delete Current User","read:user_idp_tokens":"Read Users IDP tokens","delete:users_app_metadata":"Delete Users App Metadata","read:users_app_metadata":"Read Users App Metadata","update:users_app_metadata":"Update Users App Metadata","create:users_app_metadata":"Create Users App Metadata","delete:user_custom_blocks":"Delete Custom User Blocks","read:user_custom_blocks":"Read Custom User Blocks","create:user_custom_blocks":"Create Custom User Blocks","update:current_user_identities":"Update Current User Identities"}}}}},info:{title:"Auth0 Management API",description:"Auth0 Management API v2.",termsOfService:"https://auth0.com/web-terms/",version:"2.0"},postman:{name:"Delete organization",description:{content:"Delete a specific organization\\n",type:"text/plain"},url:{path:["organizations",":id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) Organization identifier",type:"text/plain"},type:"any",value:"<string>",key:"id"}]},method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/delete-organization",previous:{title:"Get organization",permalink:"/api/get-organization"},next:{title:"Modify an Organization",permalink:"/api/modify-an-organization"}},l=[],d={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"delete-organization"},"Delete organization"),(0,r.kt)("p",null,"Delete a specific organization\\n"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Organization identifier")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"204")),(0,r.kt)("div",null,(0,r.kt)("p",null,"The organization was deleted."))),(0,r.kt)("div",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"400")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Invalid request URI. The message will vary depending on the cause."))),(0,r.kt)("div",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"401")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Invalid signature received for JSON Web Token validation."))),(0,r.kt)("div",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"403")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Insufficient scope; expected any of: delete:organizations."))),(0,r.kt)("div",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"404")),(0,r.kt)("div",null,(0,r.kt)("p",null,"The organization does not exist."))),(0,r.kt)("div",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"429")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."))),(0,r.kt)("div",null))))))}c.isMDXComponent=!0}}]);