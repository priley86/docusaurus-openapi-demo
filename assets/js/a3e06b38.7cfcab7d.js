"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||s;return r?i.createElement(h,n(n({ref:t},c),{},{components:r})):i.createElement(h,n({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,n=new Array(s);n[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,n[1]=o;for(var l=2;l<s;l++)n[l]=r[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3814:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(87462),a=(r(67294),r(3905));const s={},n="List or Search Users",o={type:"api",id:"list-or-search-users",unversionedId:"list-or-search-users",title:"List or Search Users",description:"",slug:"/list-or-search-users",frontMatter:{},api:{description:'Retrieve details of users. It is possible to:\\n\\n- Specify a search criteria for users\\n- Sort the users to be returned\\n- Select the fields to be returned\\n- Specify the number of users to retrieve per page and the page index\\n \x3c!-- only v3 is available --\x3e\\nThe <code>q</code> query parameter can be used to get users that match the specified criteria <a href="https://manage.local.dev.auth0.com/docs/users/search/v3/query-syntax">using query string syntax.</a>\\n\\n<a href="https://manage.local.dev.auth0.com/docs/users/search/v3">Learn more about searching for users.</a>\\n\\nRead about <a href="https://manage.local.dev.auth0.com/docs/users/search/best-practices">best practices</a> when working with the API endpoints for retrieving users.\\n\\nAuth0 limits the number of users you can return. If you exceed this threshold, please redefine your search, use the <a href="https://manage.local.dev.auth0.com/docs/api/management/v2#!/Jobs/post_users_exports">export job</a>, or the <a href="https://manage.local.dev.auth0.com/docs/extensions/user-import-export">User Import / Export</a> extension.\\n',tags:["users"],parameters:[{name:"page",in:"query",description:"Page index of the results to return. First page is 0.",schema:{type:"integer",minimum:0}},{name:"per_page",in:"query",description:"Number of results per page. Paging is disabled if parameter not sent.",schema:{type:"integer",maximum:100,minimum:0}},{name:"include_totals",in:"query",description:"Return results inside an object that contains the total result count (true) or as a direct array of results (false, default).",schema:{type:"boolean"}},{name:"sort",in:"query",description:"Field to sort by. Use <code>field:order</code> where order is <code>1</code> for ascending and <code>-1</code> for descending. e.g. <code>created_at:1</code>",schema:{type:"string",pattern:"^(([a-zA-Z0-9_\\\\.]+))\\:(1|-1)$"}},{name:"connection",in:"query",description:'Connection filter. Only applies when using <code>search_engine=v1</code>. To filter by connection with <code>search_engine=v2|v3</code>, use <code>q=identities.connection:"connection_name"</code>',schema:{type:"string"}},{name:"fields",in:"query",description:"Comma-separated list of fields to include or exclude (based on value provided for include_fields) in the result. Leave empty to retrieve all fields.",schema:{type:"string"}},{name:"include_fields",in:"query",description:"Whether specified fields are to be included (true) or excluded (false).",schema:{type:"boolean"}},{name:"q",in:"query",description:"Query in <a target='_new' href ='http://www.lucenetutorial.com/lucene-query-syntax.html'>Lucene query string syntax</a>. Some query types cannot be used on metadata fields, for details see <a href='https://manage.local.dev.auth0.com/docs/users/search/v3/query-syntax#searchable-fields'>Searchable Fields</a>.",schema:{type:"string"}},{name:"search_engine",in:"query",description:"The version of the search engine",schema:{type:"string",enum:["v1","v2","v3"]}}],responses:{200:{description:"Users successfully retrieved.",content:{"application/json":{schema:{oneOf:[{type:"array",items:{type:"object",additionalProperties:{},properties:{user_id:{type:"string",description:"ID of the user which can be used when interacting with other APIs.",default:"auth0|507f1f77bcf86cd799439020"},email:{type:"string",description:"Email address of this user.",default:"john.doe@gmail.com"},email_verified:{type:"boolean",description:"Whether this email address is verified (true) or unverified (false).",default:!1},username:{type:"string",description:"Username of this user.",default:"johndoe"},phone_number:{type:"string",description:'Phone number for this user when using SMS connections. Follows the <a href="https://en.wikipedia.org/wiki/E.164">E.164 recommendation</a>.',default:"+199999999999999"},phone_verified:{type:"boolean",description:"Whether this phone number has been verified (true) or not (false).",default:!1},created_at:{oneOf:[{type:"string",description:"Date and time when this user was created (ISO_8601 format)."},{type:"object",description:"Date and time when this user was created (ISO_8601 format).",additionalProperties:{}}]},updated_at:{oneOf:[{type:"string",description:"Date and time when this user was last updated/modified (ISO_8601 format)."},{type:"object",description:"Date and time when this user was last updated/modified (ISO_8601 format).",additionalProperties:{}}]},identities:{type:"array",description:"Array of user identity objects when accounts are linked.",items:{type:"object",properties:{connection:{type:"string",description:"Name of the connection containing this identity."},user_id:{type:"string",description:"Unique identifier of the user user for this identity."},provider:{type:"string",description:"The type of identity provider"},isSocial:{type:"boolean",description:"Whether this identity is from a social provider (true) or not (false)."},access_token:{type:"string",description:"IDP access token returned only if scope read:user_idp_tokens is defined."},access_token_secret:{type:"string",description:"IDP access token secret returned only if scope read:user_idp_tokens is defined."},refresh_token:{type:"string",description:"IDP refresh token returned only if scope read:user_idp_tokens is defined."},profileData:{type:"object",additionalProperties:{},properties:{email:{type:"string",description:"Email address of this user."},email_verified:{type:"boolean",description:"Whether this email address is verified (true) or unverified (false)."},name:{type:"string",description:"Name of this user."},username:{type:"string",description:"Username of this user.",default:"johndoe"},given_name:{type:"string",description:"Given name/first name/forename of this user."},phone_number:{type:"string",description:"Phone number for this user."},phone_verified:{type:"boolean",description:"Whether this phone number is verified (true) or unverified (false)."},family_name:{type:"string",description:"Family name/last name/surname of this user."}}}}}},app_metadata:{type:"object",description:"User metadata to which this user has read-only access.",additionalProperties:{}},user_metadata:{type:"object",description:"User metadata to which this user has read/write access.",additionalProperties:{}},picture:{type:"string",description:"URL to picture, photo, or avatar of this user."},name:{type:"string",description:"Name of this user."},nickname:{type:"string",description:"Preferred nickname or alias of this user."},multifactor:{type:"array",description:"List of multi-factor authentication providers with which this user has enrolled.",items:{type:"string"}},last_ip:{type:"string",description:"Last IP address from which this user logged in."},last_login:{oneOf:[{type:"string",description:"Last date and time this user logged in (ISO_8601 format)."},{type:"object",description:"Last date and time this user logged in (ISO_8601 format).",additionalProperties:{}}]},logins_count:{type:"integer",description:"Total number of logins this user has performed."},blocked:{type:"boolean",description:"Whether this user was blocked by an administrator (true) or is not (false)."},given_name:{type:"string",description:"Given name/first name/forename of this user."},family_name:{type:"string",description:"Family name/last name/surname of this user."}}}},{type:"object",properties:{start:{type:"number"},limit:{type:"number"},length:{type:"number"},total:{type:"number"},users:{type:"array",items:{type:"object",additionalProperties:{},properties:{user_id:{type:"string",description:"ID of the user which can be used when interacting with other APIs.",default:"auth0|507f1f77bcf86cd799439020"},email:{type:"string",description:"Email address of this user.",default:"john.doe@gmail.com"},email_verified:{type:"boolean",description:"Whether this email address is verified (true) or unverified (false).",default:!1},username:{type:"string",description:"Username of this user.",default:"johndoe"},phone_number:{type:"string",description:'Phone number for this user when using SMS connections. Follows the <a href="https://en.wikipedia.org/wiki/E.164">E.164 recommendation</a>.',default:"+199999999999999"},phone_verified:{type:"boolean",description:"Whether this phone number has been verified (true) or not (false).",default:!1},created_at:{oneOf:[{type:"string",description:"Date and time when this user was created (ISO_8601 format)."},{type:"object",description:"Date and time when this user was created (ISO_8601 format).",additionalProperties:{}}]},updated_at:{oneOf:[{type:"string",description:"Date and time when this user was last updated/modified (ISO_8601 format)."},{type:"object",description:"Date and time when this user was last updated/modified (ISO_8601 format).",additionalProperties:{}}]},identities:{type:"array",description:"Array of user identity objects when accounts are linked.",items:{type:"object",properties:{connection:{type:"string",description:"Name of the connection containing this identity."},user_id:{type:"string",description:"Unique identifier of the user user for this identity."},provider:{type:"string",description:"The type of identity provider"},isSocial:{type:"boolean",description:"Whether this identity is from a social provider (true) or not (false)."},access_token:{type:"string",description:"IDP access token returned only if scope read:user_idp_tokens is defined."},access_token_secret:{type:"string",description:"IDP access token secret returned only if scope read:user_idp_tokens is defined."},refresh_token:{type:"string",description:"IDP refresh token returned only if scope read:user_idp_tokens is defined."},profileData:{type:"object",additionalProperties:{},properties:{email:{type:"string",description:"Email address of this user."},email_verified:{type:"boolean",description:"Whether this email address is verified (true) or unverified (false)."},name:{type:"string",description:"Name of this user."},username:{type:"string",description:"Username of this user.",default:"johndoe"},given_name:{type:"string",description:"Given name/first name/forename of this user."},phone_number:{type:"string",description:"Phone number for this user."},phone_verified:{type:"boolean",description:"Whether this phone number is verified (true) or unverified (false)."},family_name:{type:"string",description:"Family name/last name/surname of this user."}}}}}},app_metadata:{type:"object",description:"User metadata to which this user has read-only access.",additionalProperties:{}},user_metadata:{type:"object",description:"User metadata to which this user has read/write access.",additionalProperties:{}},picture:{type:"string",description:"URL to picture, photo, or avatar of this user."},name:{type:"string",description:"Name of this user."},nickname:{type:"string",description:"Preferred nickname or alias of this user."},multifactor:{type:"array",description:"List of multi-factor authentication providers with which this user has enrolled.",items:{type:"string"}},last_ip:{type:"string",description:"Last IP address from which this user logged in."},last_login:{oneOf:[{type:"string",description:"Last date and time this user logged in (ISO_8601 format)."},{type:"object",description:"Last date and time this user logged in (ISO_8601 format).",additionalProperties:{}}]},logins_count:{type:"integer",description:"Total number of logins this user has performed."},blocked:{type:"boolean",description:"Whether this user was blocked by an administrator (true) or is not (false)."},given_name:{type:"string",description:"Given name/first name/forename of this user."},family_name:{type:"string",description:"Family name/last name/surname of this user."}}}}}}]}}}},400:{description:"You can only page through the first 1000 records. See https://manage.local.dev.auth0.com/docs/users/search/v3/view-search-results-by-page#limitation."},401:{description:"Invalid token."},403:{description:"Insufficient scope, expected any of: read:users."},429:{description:"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."},503:{description:"The query exceeded the timeout. Please try refining your search criteria. See https://manage.local.dev.auth0.com/docs/best-practices/search-best-practices."}},operationId:"get_users",security:[{bearerAuth:[]},{oAuth2ClientCredentials:["read:users","read:user_idp_tokens"]}],method:"get",path:"/users",servers:[{url:"https://login0.local.dev.auth0.com/api/v2"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"jwt"},oAuth2ClientCredentials:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://login0.local.dev.auth0.com/oauth/token/","x-form-parameters":{audience:"https://login0.local.dev.auth0.com/api/v2/"},scopes:{"delete:actions":"Delete Actions","read:actions":"Read Actions","update:actions":"Update Actions","create:actions":"Create Actions","delete:anomaly_blocks":"Delete Anomaly Detection Blocks","read:anomaly_blocks":"Read Anomaly Detection Blocks","read:attack_protection":"Read attack protection","update:attack_protection":"Update attack protection","blacklist:tokens":"Blacklist Tokens","read:branding":"Read branding settings","update:branding":"Update branding settings","delete:branding":"Delete branding settings","delete:client_grants":"Delete Client Grants","read:client_grants":"Read Client Grants","update:client_grants":"Update Client Grants","create:client_grants":"Create Client Grants","delete:clients":"Delete Clients","read:clients":"Read Clients","update:clients":"Update Clients","create:clients":"Create Clients","delete:client_credentials":"Delete Client Credentials","read:client_credentials":"Read Client Credentials","update:client_credentials":"Update Client Credentials","create:client_credentials":"Create Client Credentials","delete:client_keys":"Delete Client Keys","read:client_keys":"Read Client Keys","update:client_keys":"Update Client Keys","create:client_keys":"Create Client Keys","delete:connections":"Delete Connections","read:connections":"Read Connections","update:connections":"Update Connections","create:connections":"Create Connections","delete:custom_domains":"Delete custom domain configurations","read:custom_domains":"Read custom domain configurations","update:custom_domains":"Update custom domain configurations","create:custom_domains":"Configure new custom domains","update:device_codes":"Update Device Codes","read:device_codes":"Read Device Codes","delete:device_credentials":"Delete Device Credentials","read:device_credentials":"Read Device Credentials","update:device_credentials":"Update Device Credentials","create:device_credentials":"Create Device Credentials","delete:current_user_device_credentials":"Delete Current User Device Credentials","read:current_user_device_credentials":"Read Current User Device Credentials","create:current_user_device_credentials":"Create Current User Device Credentials","delete:email_templates":"Delete email templates","read:email_templates":"Read email emplates","update:email_templates":"Update email templates","create:email_templates":"Create email templates","read:email_triggers":"Read email triggers","update:email_triggers":"Update email triggers","delete:email_provider":"Delete Email Provider","read:email_provider":"Read Email Provider","update:email_provider":"Update Email Provider","create:email_provider":"Create Email Provider","read:entitlements":"Read entitlements","delete:guardian_enrollments":"Delete Guardian enrollments","read:guardian_enrollments":"Read Guardian enrollments","create:guardian_enrollment_tickets":"Create enrollment tickets for Guardian","read:guardian_factors":"Read Guardian factors configuration","update:guardian_factors":"Update Guardian factors","read:grants":"Read User Grants","delete:grants":"Delete User Grants","delete:hooks":"Delete Hooks","read:hooks":"Read Hooks","update:hooks":"Update Hooks","create:hooks":"Create Hooks","read:insights":"Read Insights","delete:integrations":"Delete integrations","read:integrations":"Read integrations","update:integrations":"Update integrations","create:integrations":"Create integrations","read:limits":"Read entity limits","update:limits":"Update entity limits","read:log_streams":"Read log_streams","delete:log_streams":"Delete log_streams","update:log_streams":"Update log_streams","create:log_streams":"Create log_streams","read:logs":"Read Logs","read:logs_users":"Read logs relating to users","read:mfa_policies":"Read Multifactor Authentication policies","update:mfa_policies":"Update Multifactor Authentication policies","delete:organization_connections":"Delete organization connections","read:organization_connections":"Read organization connections","update:organization_connections":"Update organization connections","create:organization_connections":"Create organization connections","delete:organization_invitations":"Delete organization invitations","read:organization_invitations":"Read organization invitations","create:organization_invitations":"Create organization invitations","delete:organization_member_roles":"Delete organization member roles","read:organization_member_roles":"Read organization member roles","create:organization_member_roles":"Create organization member roles","delete:organizations":"Delete organizations","read:organizations":"Read organizations","create:organizations":"Create organizations","update:organizations":"Update organizations","delete:organization_members":"Delete organization members","read:organization_members":"Read organization members","create:organization_members":"Create organization members","read:organizations_summary":"Read organization summary","create:passwords_checking_job":"Create password checking jobs","delete:passwords_checking_job":"Deletes password checking job and all its resources","read:prompts":"Read prompts settings","update:prompts":"Update prompts settings","delete:requested_scopes":"Delete Requested Scopes","read:requested_scopes":"Read Requested Scopes","update:requested_scopes":"Update Requested Scopes","create:requested_scopes":"Create Requested Scopes","delete:resource_servers":"Delete Resource Servers","read:resource_servers":"Read Resource Servers","update:resource_servers":"Update Resource Servers","create:resource_servers":"Create Resource Servers","create:role_members":"Create role members","read:role_members":"Read role members","update:role_members":"Update role members","delete:role_members":"Delete role members","delete:roles":"Delete roles","read:roles":"Read roles","update:roles":"Update roles","create:roles":"Create roles","delete:rules":"Delete Rules","read:rules":"Read Rules","update:rules":"Update Rules","create:rules":"Create Rules","delete:rules_configs":"Delete Rules Configs","read:rules_configs":"Read Rules Configs","update:rules_configs":"Update Rules Configs","delete:signing_keys":"Delete signing keys","create:signing_keys":"Create signing keys","read:signing_keys":"Read signing keys","update:signing_keys":"Update signing keys","delete:shields":"Delete Shields","read:shields":"Read Shields","update:shields":"Update Shields","create:shields":"Create Shields","read:stats":"Read Stats","create:test_email_dispatch":"Create test email dispatch","read:tenant_settings":"Read Tenant Settings","update:tenant_settings":"Update Tenant Settings","read:triggers":"Read Triggers","update:triggers":"Update Triggers","create:user_tickets":"Create User Tickets","delete:users":"Delete Users","read:users":"Read Users","update:users":"Update Users","create:users":"Create Users","read:current_user":"Read Current User","delete:current_user":"Delete Current User","read:user_idp_tokens":"Read Users IDP tokens","delete:users_app_metadata":"Delete Users App Metadata","read:users_app_metadata":"Read Users App Metadata","update:users_app_metadata":"Update Users App Metadata","create:users_app_metadata":"Create Users App Metadata","delete:user_custom_blocks":"Delete Custom User Blocks","read:user_custom_blocks":"Read Custom User Blocks","create:user_custom_blocks":"Create Custom User Blocks","update:current_user_identities":"Update Current User Identities"}}}}},info:{title:"Auth0 Management API",description:"Auth0 Management API v2.",termsOfService:"https://auth0.com/web-terms/",version:"2.0"},postman:{name:"List or Search Users",description:{content:'Retrieve details of users. It is possible to:\\n\\n- Specify a search criteria for users\\n- Sort the users to be returned\\n- Select the fields to be returned\\n- Specify the number of users to retrieve per page and the page index\\n \x3c!-- only v3 is available --\x3e\\nThe <code>q</code> query parameter can be used to get users that match the specified criteria <a href="https://manage.local.dev.auth0.com/docs/users/search/v3/query-syntax">using query string syntax.</a>\\n\\n<a href="https://manage.local.dev.auth0.com/docs/users/search/v3">Learn more about searching for users.</a>\\n\\nRead about <a href="https://manage.local.dev.auth0.com/docs/users/search/best-practices">best practices</a> when working with the API endpoints for retrieving users.\\n\\nAuth0 limits the number of users you can return. If you exceed this threshold, please redefine your search, use the <a href="https://manage.local.dev.auth0.com/docs/api/management/v2#!/Jobs/post_users_exports">export job</a>, or the <a href="https://manage.local.dev.auth0.com/docs/extensions/user-import-export">User Import / Export</a> extension.\\n',type:"text/plain"},url:{path:["users"],host:["{{baseUrl}}"],query:[{description:{content:"Page index of the results to return. First page is 0.",type:"text/plain"},key:"page",value:"<integer>"},{description:{content:"Number of results per page. Paging is disabled if parameter not sent.",type:"text/plain"},key:"per_page",value:"<integer>"},{description:{content:"Return results inside an object that contains the total result count (true) or as a direct array of results (false, default).",type:"text/plain"},key:"include_totals",value:"<boolean>"},{description:{content:"Field to sort by. Use <code>field:order</code> where order is <code>1</code> for ascending and <code>-1</code> for descending. e.g. <code>created_at:1</code>",type:"text/plain"},key:"sort",value:"<string>"},{description:{content:'Connection filter. Only applies when using <code>search_engine=v1</code>. To filter by connection with <code>search_engine=v2|v3</code>, use <code>q=identities.connection:"connection_name"</code>',type:"text/plain"},key:"connection",value:"<string>"},{description:{content:"Comma-separated list of fields to include or exclude (based on value provided for include_fields) in the result. Leave empty to retrieve all fields.",type:"text/plain"},key:"fields",value:"<string>"},{description:{content:"Whether specified fields are to be included (true) or excluded (false).",type:"text/plain"},key:"include_fields",value:"<boolean>"},{description:{content:"Query in <a target='_new' href ='http://www.lucenetutorial.com/lucene-query-syntax.html'>Lucene query string syntax</a>. Some query types cannot be used on metadata fields, for details see <a href='https://manage.local.dev.auth0.com/docs/users/search/v3/query-syntax#searchable-fields'>Searchable Fields</a>.",type:"text/plain"},key:"q",value:"<string>"},{description:{content:"The version of the search engine",type:"text/plain"},key:"search_engine",value:"<string>"}],variable:[]},method:"GET",auth:{type:"oauth2",oauth2:[]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docusaurus-openapi-demo/api/list-or-search-users",previous:{title:"Unblock a user",permalink:"/docusaurus-openapi-demo/api/unblock-a-user"},next:{title:"Create a User",permalink:"/docusaurus-openapi-demo/api/create-a-user"}},d=[],l={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list-or-search-users"},"List or Search Users"),(0,a.kt)("p",null,"Retrieve details of users. It is possible to:\\n\\n- Specify a search criteria for users\\n- Sort the users to be returned\\n- Select the fields to be returned\\n- Specify the number of users to retrieve per page and the page index\\n ","\\nThe ",(0,a.kt)("code",null,"q")," query parameter can be used to get users that match the specified criteria ",(0,a.kt)("a",{href:"https://manage.local.dev.auth0.com/docs/users/search/v3/query-syntax"},"using query string syntax."),"\\n\\n",(0,a.kt)("a",{href:"https://manage.local.dev.auth0.com/docs/users/search/v3"},"Learn more about searching for users."),"\\n\\nRead about ",(0,a.kt)("a",{href:"https://manage.local.dev.auth0.com/docs/users/search/best-practices"},"best practices")," when working with the API endpoints for retrieving users.\\n\\nAuth0 limits the number of users you can return. If you exceed this threshold, please redefine your search, use the ",(0,a.kt)("a",{href:"https://manage.local.dev.auth0.com/docs/api/management/v2#!/Jobs/post_users_exports"},"export job"),", or the ",(0,a.kt)("a",{href:"https://manage.local.dev.auth0.com/docs/extensions/user-import-export"},"User Import / Export")," extension.\\n"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"page"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Page index of the results to return. First page is 0.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"per_page"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," value \u2264 100")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Number of results per page. Paging is disabled if parameter not sent.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"include_totals"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Return results inside an object that contains the total result count (true) or as a direct array of results (false, default).")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sort"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," Value must match regular expression ",(0,a.kt)("inlineCode",{parentName:"p"},"^(([a-zA-Z0-9_\\\\.]+))\\:(1|-1)$"))),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Field to sort by. Use ",(0,a.kt)("code",null,"field:order")," where order is ",(0,a.kt)("code",null,"1")," for ascending and ",(0,a.kt)("code",null,"-1")," for descending. e.g. ",(0,a.kt)("code",null,"created_at:1"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"connection"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Connection filter. Only applies when using ",(0,a.kt)("code",null,"search_engine=v1"),". To filter by connection with ",(0,a.kt)("code",null,"search_engine=v2|v3"),", use ",(0,a.kt)("code",null,'q=identities.connection:"connection_name"'))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"fields"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Comma-separated list of fields to include or exclude (based on value provided for include_fields) in the result. Leave empty to retrieve all fields.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"include_fields"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Whether specified fields are to be included (true) or excluded (false).")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"q"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Query in ",(0,a.kt)("a",{target:"_new",href:"http://www.lucenetutorial.com/lucene-query-syntax.html"},"Lucene query string syntax"),". Some query types cannot be used on metadata fields, for details see ",(0,a.kt)("a",{href:"https://manage.local.dev.auth0.com/docs/users/search/v3/query-syntax#searchable-fields"},"Searchable Fields"),".")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"search_engine"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"v1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v3"),"]")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The version of the search engine")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Users successfully retrieved."))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"400")),(0,a.kt)("div",null,(0,a.kt)("p",null,"You can only page through the first 1000 records. See ",(0,a.kt)("a",{parentName:"p",href:"https://manage.local.dev.auth0.com/docs/users/search/v3/view-search-results-by-page#limitation"},"https://manage.local.dev.auth0.com/docs/users/search/v3/view-search-results-by-page#limitation"),"."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"401")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Invalid token."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"403")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Insufficient scope, expected any of: read:users."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"429")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"503")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The query exceeded the timeout. Please try refining your search criteria. See ",(0,a.kt)("a",{parentName:"p",href:"https://manage.local.dev.auth0.com/docs/best-practices/search-best-practices"},"https://manage.local.dev.auth0.com/docs/best-practices/search-best-practices"),"."))),(0,a.kt)("div",null))))))}c.isMDXComponent=!0}}]);