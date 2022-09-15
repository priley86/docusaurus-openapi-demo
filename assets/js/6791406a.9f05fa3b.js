"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[330],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),d=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,k=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return a?i.createElement(k,s(s({ref:t},c),{},{components:a})):i.createElement(k,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<r;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},32508:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=a(87462),n=(a(67294),a(3905));const r={},s="Search Users by Email",l={type:"api",id:"search-users-by-email",unversionedId:"search-users-by-email",title:"Search Users by Email",description:"",slug:"/search-users-by-email",frontMatter:{},api:{description:"If Auth0 is the identify provider (idP), the email address associated with a user is saved in lower case, regardless of how you initially provided it. For example, if you register a user as <b>JohnSmith@example.com</b>, Auth0 saves the user's email as <b>johnsmith@example.com</b>.\\n\\nIn cases where Auth0 is not the idP, the `email` is stored based on the rules of idP, so make sure the search is made using the correct capitalization.\\n\\nWhen using this endpoint, make sure that you are searching for users via email addresses using the correct case.\\n",tags:["users-by-email"],parameters:[{name:"fields",in:"query",description:"Comma-separated list of fields to include or exclude (based on value provided for include_fields) in the result. Leave empty to retrieve all fields.",schema:{type:"string",pattern:"^((phone_number)|(email)|(email_verified)|(picture)|(username)|(user_id)|(name)|(nickname)|(created_at)|(identities)|(app_metadata)|(user_metadata)|(last_ip)|(last_login)|(logins_count)|(updated_at)|(blocked)|(family_name)|(given_name))(,((phone_number)|(email)|(email_verified)|(picture)|(username)|(user_id)|(name)|(nickname)|(created_at)|(identities)|(app_metadata)|(user_metadata)|(last_ip)|(last_login)|(logins_count)|(updated_at)|(blocked)|(family_name)|(given_name)))*$"}},{name:"include_fields",in:"query",description:"Whether specified fields are to be included (true) or excluded (false). Defaults to true.",schema:{type:"boolean"}},{name:"email",in:"query",description:"Email address to search for (case-sensitive).",required:!0,schema:{type:"string"}}],responses:{200:{description:"Users successfully searched.",content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:{},properties:{user_id:{type:"string",description:"ID of the user which can be used when interacting with other APIs.",default:"auth0|507f1f77bcf86cd799439020"},email:{type:"string",description:"Email address of this user.",default:"john.doe@gmail.com"},email_verified:{type:"boolean",description:"Whether this email address is verified (true) or unverified (false).",default:!1},username:{type:"string",description:"Username of this user.",default:"johndoe"},phone_number:{type:"string",description:'Phone number for this user when using SMS connections. Follows the <a href="https://en.wikipedia.org/wiki/E.164">E.164 recommendation</a>.',default:"+199999999999999"},phone_verified:{type:"boolean",description:"Whether this phone number has been verified (true) or not (false).",default:!1},created_at:{oneOf:[{type:"string",description:"Date and time when this user was created (ISO_8601 format)."},{type:"object",description:"Date and time when this user was created (ISO_8601 format).",additionalProperties:{}}]},updated_at:{oneOf:[{type:"string",description:"Date and time when this user was last updated/modified (ISO_8601 format)."},{type:"object",description:"Date and time when this user was last updated/modified (ISO_8601 format).",additionalProperties:{}}]},identities:{type:"array",description:"Array of user identity objects when accounts are linked.",items:{type:"object",properties:{connection:{type:"string",description:"Name of the connection containing this identity."},user_id:{type:"string",description:"Unique identifier of the user user for this identity."},provider:{type:"string",description:"The type of identity provider"},isSocial:{type:"boolean",description:"Whether this identity is from a social provider (true) or not (false)."},access_token:{type:"string",description:"IDP access token returned only if scope read:user_idp_tokens is defined."},access_token_secret:{type:"string",description:"IDP access token secret returned only if scope read:user_idp_tokens is defined."},refresh_token:{type:"string",description:"IDP refresh token returned only if scope read:user_idp_tokens is defined."},profileData:{type:"object",additionalProperties:{},properties:{email:{type:"string",description:"Email address of this user."},email_verified:{type:"boolean",description:"Whether this email address is verified (true) or unverified (false)."},name:{type:"string",description:"Name of this user."},username:{type:"string",description:"Username of this user.",default:"johndoe"},given_name:{type:"string",description:"Given name/first name/forename of this user."},phone_number:{type:"string",description:"Phone number for this user."},phone_verified:{type:"boolean",description:"Whether this phone number is verified (true) or unverified (false)."},family_name:{type:"string",description:"Family name/last name/surname of this user."}}}}}},app_metadata:{type:"object",description:"User metadata to which this user has read-only access.",additionalProperties:{}},user_metadata:{type:"object",description:"User metadata to which this user has read/write access.",additionalProperties:{}},picture:{type:"string",description:"URL to picture, photo, or avatar of this user."},name:{type:"string",description:"Name of this user."},nickname:{type:"string",description:"Preferred nickname or alias of this user."},multifactor:{type:"array",description:"List of multi-factor authentication providers with which this user has enrolled.",items:{type:"string"}},last_ip:{type:"string",description:"Last IP address from which this user logged in."},last_login:{oneOf:[{type:"string",description:"Last date and time this user logged in (ISO_8601 format)."},{type:"object",description:"Last date and time this user logged in (ISO_8601 format).",additionalProperties:{}}]},logins_count:{type:"integer",description:"Total number of logins this user has performed."},blocked:{type:"boolean",description:"Whether this user was blocked by an administrator (true) or is not (false)."},given_name:{type:"string",description:"Given name/first name/forename of this user."},family_name:{type:"string",description:"Family name/last name/surname of this user."}}}}}}},400:{description:"Invalid request query string. The message will vary depending on the cause."},401:{description:"Invalid signature received for JSON Web Token validation."},403:{description:"Insufficient scope; expected any of: read:users."},429:{description:"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."}},operationId:"get_users-by-email",security:[{bearerAuth:[]},{oAuth2ClientCredentials:["read:users"]}],method:"get",path:"/users-by-email",servers:[{url:"https://login0.local.dev.auth0.com/api/v2"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"jwt"},oAuth2ClientCredentials:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://login0.local.dev.auth0.com/oauth/token/","x-form-parameters":{audience:"https://login0.local.dev.auth0.com/api/v2/"},scopes:{"delete:actions":"Delete Actions","read:actions":"Read Actions","update:actions":"Update Actions","create:actions":"Create Actions","delete:anomaly_blocks":"Delete Anomaly Detection Blocks","read:anomaly_blocks":"Read Anomaly Detection Blocks","read:attack_protection":"Read attack protection","update:attack_protection":"Update attack protection","blacklist:tokens":"Blacklist Tokens","read:branding":"Read branding settings","update:branding":"Update branding settings","delete:branding":"Delete branding settings","delete:client_grants":"Delete Client Grants","read:client_grants":"Read Client Grants","update:client_grants":"Update Client Grants","create:client_grants":"Create Client Grants","delete:clients":"Delete Clients","read:clients":"Read Clients","update:clients":"Update Clients","create:clients":"Create Clients","delete:client_credentials":"Delete Client Credentials","read:client_credentials":"Read Client Credentials","update:client_credentials":"Update Client Credentials","create:client_credentials":"Create Client Credentials","delete:client_keys":"Delete Client Keys","read:client_keys":"Read Client Keys","update:client_keys":"Update Client Keys","create:client_keys":"Create Client Keys","delete:connections":"Delete Connections","read:connections":"Read Connections","update:connections":"Update Connections","create:connections":"Create Connections","delete:custom_domains":"Delete custom domain configurations","read:custom_domains":"Read custom domain configurations","update:custom_domains":"Update custom domain configurations","create:custom_domains":"Configure new custom domains","update:device_codes":"Update Device Codes","read:device_codes":"Read Device Codes","delete:device_credentials":"Delete Device Credentials","read:device_credentials":"Read Device Credentials","update:device_credentials":"Update Device Credentials","create:device_credentials":"Create Device Credentials","delete:current_user_device_credentials":"Delete Current User Device Credentials","read:current_user_device_credentials":"Read Current User Device Credentials","create:current_user_device_credentials":"Create Current User Device Credentials","delete:email_templates":"Delete email templates","read:email_templates":"Read email emplates","update:email_templates":"Update email templates","create:email_templates":"Create email templates","read:email_triggers":"Read email triggers","update:email_triggers":"Update email triggers","delete:email_provider":"Delete Email Provider","read:email_provider":"Read Email Provider","update:email_provider":"Update Email Provider","create:email_provider":"Create Email Provider","read:entitlements":"Read entitlements","delete:guardian_enrollments":"Delete Guardian enrollments","read:guardian_enrollments":"Read Guardian enrollments","create:guardian_enrollment_tickets":"Create enrollment tickets for Guardian","read:guardian_factors":"Read Guardian factors configuration","update:guardian_factors":"Update Guardian factors","read:grants":"Read User Grants","delete:grants":"Delete User Grants","delete:hooks":"Delete Hooks","read:hooks":"Read Hooks","update:hooks":"Update Hooks","create:hooks":"Create Hooks","read:insights":"Read Insights","delete:integrations":"Delete integrations","read:integrations":"Read integrations","update:integrations":"Update integrations","create:integrations":"Create integrations","read:limits":"Read entity limits","update:limits":"Update entity limits","read:log_streams":"Read log_streams","delete:log_streams":"Delete log_streams","update:log_streams":"Update log_streams","create:log_streams":"Create log_streams","read:logs":"Read Logs","read:logs_users":"Read logs relating to users","read:mfa_policies":"Read Multifactor Authentication policies","update:mfa_policies":"Update Multifactor Authentication policies","delete:organization_connections":"Delete organization connections","read:organization_connections":"Read organization connections","update:organization_connections":"Update organization connections","create:organization_connections":"Create organization connections","delete:organization_invitations":"Delete organization invitations","read:organization_invitations":"Read organization invitations","create:organization_invitations":"Create organization invitations","delete:organization_member_roles":"Delete organization member roles","read:organization_member_roles":"Read organization member roles","create:organization_member_roles":"Create organization member roles","delete:organizations":"Delete organizations","read:organizations":"Read organizations","create:organizations":"Create organizations","update:organizations":"Update organizations","delete:organization_members":"Delete organization members","read:organization_members":"Read organization members","create:organization_members":"Create organization members","read:organizations_summary":"Read organization summary","create:passwords_checking_job":"Create password checking jobs","delete:passwords_checking_job":"Deletes password checking job and all its resources","read:prompts":"Read prompts settings","update:prompts":"Update prompts settings","delete:requested_scopes":"Delete Requested Scopes","read:requested_scopes":"Read Requested Scopes","update:requested_scopes":"Update Requested Scopes","create:requested_scopes":"Create Requested Scopes","delete:resource_servers":"Delete Resource Servers","read:resource_servers":"Read Resource Servers","update:resource_servers":"Update Resource Servers","create:resource_servers":"Create Resource Servers","create:role_members":"Create role members","read:role_members":"Read role members","update:role_members":"Update role members","delete:role_members":"Delete role members","delete:roles":"Delete roles","read:roles":"Read roles","update:roles":"Update roles","create:roles":"Create roles","delete:rules":"Delete Rules","read:rules":"Read Rules","update:rules":"Update Rules","create:rules":"Create Rules","delete:rules_configs":"Delete Rules Configs","read:rules_configs":"Read Rules Configs","update:rules_configs":"Update Rules Configs","delete:signing_keys":"Delete signing keys","create:signing_keys":"Create signing keys","read:signing_keys":"Read signing keys","update:signing_keys":"Update signing keys","delete:shields":"Delete Shields","read:shields":"Read Shields","update:shields":"Update Shields","create:shields":"Create Shields","read:stats":"Read Stats","create:test_email_dispatch":"Create test email dispatch","read:tenant_settings":"Read Tenant Settings","update:tenant_settings":"Update Tenant Settings","read:triggers":"Read Triggers","update:triggers":"Update Triggers","create:user_tickets":"Create User Tickets","delete:users":"Delete Users","read:users":"Read Users","update:users":"Update Users","create:users":"Create Users","read:current_user":"Read Current User","delete:current_user":"Delete Current User","read:user_idp_tokens":"Read Users IDP tokens","delete:users_app_metadata":"Delete Users App Metadata","read:users_app_metadata":"Read Users App Metadata","update:users_app_metadata":"Update Users App Metadata","create:users_app_metadata":"Create Users App Metadata","delete:user_custom_blocks":"Delete Custom User Blocks","read:user_custom_blocks":"Read Custom User Blocks","create:user_custom_blocks":"Create Custom User Blocks","update:current_user_identities":"Update Current User Identities"}}}}},info:{title:"Auth0 Management API",description:"Auth0 Management API v2.",termsOfService:"https://auth0.com/web-terms/",version:"2.0"},postman:{name:"Search Users by Email",description:{content:"If Auth0 is the identify provider (idP), the email address associated with a user is saved in lower case, regardless of how you initially provided it. For example, if you register a user as <b>JohnSmith@example.com</b>, Auth0 saves the user's email as <b>johnsmith@example.com</b>.\\n\\nIn cases where Auth0 is not the idP, the `email` is stored based on the rules of idP, so make sure the search is made using the correct capitalization.\\n\\nWhen using this endpoint, make sure that you are searching for users via email addresses using the correct case.\\n",type:"text/plain"},url:{path:["users-by-email"],host:["{{baseUrl}}"],query:[{description:{content:"Comma-separated list of fields to include or exclude (based on value provided for include_fields) in the result. Leave empty to retrieve all fields.",type:"text/plain"},key:"fields",value:"<string>"},{description:{content:"Whether specified fields are to be included (true) or excluded (false). Defaults to true.",type:"text/plain"},key:"include_fields",value:"<boolean>"},{description:{content:"(Required) Email address to search for (case-sensitive).",type:"text/plain"},key:"email",value:"<string>"}],variable:[]},method:"GET",auth:{type:"oauth2",oauth2:[]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/search-users-by-email",previous:{title:"Create a User",permalink:"/api/create-a-user"},next:{title:"Get a User",permalink:"/api/get-a-user"}},o=[],d={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"search-users-by-email"},"Search Users by Email"),(0,n.kt)("p",null,"If Auth0 is the identify provider (idP), the email address associated with a user is saved in lower case, regardless of how you initially provided it. For example, if you register a user as ",(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"p",href:"mailto:JohnSmith@example.com"},"JohnSmith@example.com")),", Auth0 saves the user's email as ",(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"p",href:"mailto:johnsmith@example.com"},"johnsmith@example.com")),".\\n\\nIn cases where Auth0 is not the idP, the ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," is stored based on the rules of idP, so make sure the search is made using the correct capitalization.\\n\\nWhen using this endpoint, make sure that you are searching for users via email addresses using the correct case.\\n"),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"fields"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible values:")," Value must match regular expression ",(0,n.kt)("inlineCode",{parentName:"p"},"^((phone_number)|(email)|(email_verified)|(picture)|(username)|(user_id)|(name)|(nickname)|(created_at)|(identities)|(app_metadata)|(user_metadata)|(last_ip)|(last_login)|(logins_count)|(updated_at)|(blocked)|(family_name)|(given_name))(,((phone_number)|(email)|(email_verified)|(picture)|(username)|(user_id)|(name)|(nickname)|(created_at)|(identities)|(app_metadata)|(user_metadata)|(last_ip)|(last_login)|(logins_count)|(updated_at)|(blocked)|(family_name)|(given_name)))*$"))),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Comma-separated list of fields to include or exclude (based on value provided for include_fields) in the result. Leave empty to retrieve all fields.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"include_fields"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Whether specified fields are to be included (true) or excluded (false). Defaults to true.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"email"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Email address to search for (case-sensitive).")))))),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"200")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Users successfully searched."))),(0,n.kt)("div",null,(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,n.kt)("div",null)))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"user_id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"ID of the user which can be used when interacting with other APIs.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"email"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Email address of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"email_verified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Whether this email address is verified (true) or unverified (false).")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"username"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Username of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"phone_number"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Phone number for this user when using SMS connections. Follows the ",(0,n.kt)("a",{href:"https://en.wikipedia.org/wiki/E.164"},"E.164 recommendation"),".")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"phone_verified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Whether this phone number has been verified (true) or not (false).")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"created_at"),(0,n.kt)("span",{style:{opacity:"0.6"}}," "))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"updated_at"),(0,n.kt)("span",{style:{opacity:"0.6"}}," "))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"identities"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Array of user identity objects when accounts are linked.")),(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"connection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Name of the connection containing this identity.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"user_id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Unique identifier of the user user for this identity.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"provider"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The type of identity provider")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"isSocial"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Whether this identity is from a social provider (true) or not (false).")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"access_token"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"IDP access token returned only if scope read:user_idp_tokens is defined.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"access_token_secret"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"IDP access token secret returned only if scope read:user_idp_tokens is defined.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"refresh_token"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"IDP refresh token returned only if scope read:user_idp_tokens is defined.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"profileData"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"email"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Email address of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"email_verified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Whether this email address is verified (true) or unverified (false).")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"name"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Name of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"username"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Username of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"given_name"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Given name/first name/forename of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"phone_number"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Phone number for this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"phone_verified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Whether this phone number is verified (true) or unverified (false).")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"family_name"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Family name/last name/surname of this user.")))))))))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"app_metadata"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"User metadata to which this user has read-only access.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"user_metadata"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"User metadata to which this user has read/write access.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"picture"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"URL to picture, photo, or avatar of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"name"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Name of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"nickname"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Preferred nickname or alias of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"multifactor"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"List of multi-factor authentication providers with which this user has enrolled.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"last_ip"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Last IP address from which this user logged in.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"last_login"),(0,n.kt)("span",{style:{opacity:"0.6"}}," "))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"logins_count"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Total number of logins this user has performed.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"blocked"),(0,n.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Whether this user was blocked by an administrator (true) or is not (false).")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"given_name"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Given name/first name/forename of this user.")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"family_name"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Family name/last name/surname of this user."))))))))))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"400")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Invalid request query string. The message will vary depending on the cause."))),(0,n.kt)("div",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"401")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Invalid signature received for JSON Web Token validation."))),(0,n.kt)("div",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"403")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Insufficient scope; expected any of: read:users."))),(0,n.kt)("div",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"429")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."))),(0,n.kt)("div",null))))))}c.isMDXComponent=!0}}]);