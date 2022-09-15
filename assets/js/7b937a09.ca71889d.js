"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),d=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||c[g]||i;return n?s.createElement(m,r(r({ref:t},u),{},{components:n})):s.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22248:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(87462),a=(n(67294),n(3905));const i={},r="Get log stream by ID",o={type:"api",id:"get-log-stream-by-id",unversionedId:"get-log-stream-by-id",title:"Get log stream by ID",description:"",slug:"/get-log-stream-by-id",frontMatter:{},api:{description:'Retrieve a log stream configuration and status.\\n<h5>Sample responses</h5><h5>Amazon EventBridge Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "eventbridge",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"awsAccountId": "string",\\n\t\t"awsRegion": "string",\\n\t\t"awsPartnerEventSource": "string"\\n\t}\\n}</code></pre> <h5>HTTP Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "http",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"httpContentFormat": "JSONLINES|JSONARRAY",\\n\t\t"httpContentType": "string",\\n\t\t"httpEndpoint": "string",\\n\t\t"httpAuthorization": "string"\\n\t}\\n}</code></pre> <h5>Datadog Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "datadog",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"datadogRegion": "string",\\n\t\t"datadogApiKey": "string"\\n\t}\\n}</code></pre> <h5>Splunk Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "splunk",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"splunkDomain": "string",\\n\t\t"splunkToken": "string",\\n\t\t"splunkPort": "string",\\n\t\t"splunkSecure": "boolean"\\n\t}\\n}</code></pre> <h5>Sumo Logic Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "sumo",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"sumoSourceAddress": "string",\\n\t}\\n}</code></pre> <h5>Status</h5> The <code>status</code> of a log stream maybe any of the following:\\n1. <code>active</code> - Stream is currently enabled.\\n2. <code>paused</code> - Stream is currently user disabled and will not attempt log delivery.\\n3. <code>suspended</code> - Stream is currently disabled because of errors and will not attempt log delivery.\\n',tags:["log-streams"],parameters:[{name:"id",in:"path",description:"The id of the log stream to get",required:!0,schema:{type:"string"}}],responses:{200:{description:"Returning log stream.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{id:{type:"string",description:"The id of the log stream"},name:{type:"string",description:"log stream name"},status:{type:"string",description:"The status of the log stream. Possible values: `active`, `paused`, `suspended`",enum:["active","paused","suspended"]},type:{type:"string",enum:["http"]},filters:{type:"array",description:"Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered.",items:{type:"object",properties:{type:{type:"string",description:"Filter type. Currently `category` is the only valid type.",enum:["category"]},name:{type:"string",description:"Category group name",enum:["auth.ancillary.fail","auth.ancillary.success","auth.login.fail","auth.login.notification","auth.login.success","auth.logout.fail","auth.logout.success","auth.signup.fail","auth.signup.success","auth.silent_auth.fail","auth.silent_auth.success","auth.token_exchange.fail","auth.token_exchange.success","management.fail","management.success","system.notification","user.fail","user.notification","user.success","other"]}}}},sink:{type:"object",required:["httpEndpoint"],properties:{httpAuthorization:{type:"string",description:"HTTP Authorization header"},httpContentFormat:{type:"string",description:"HTTP JSON format",enum:["JSONARRAY","JSONLINES","JSONOBJECT"]},httpContentType:{type:"string",description:"HTTP Content-Type header"},httpEndpoint:{type:"string",description:"HTTP endpoint"},httpCustomHeaders:{type:"array",description:"custom HTTP headers",items:{type:"object",properties:{header:{type:"string",description:"HTTP header name"},value:{type:"string",description:"HTTP header value"}}}}}}}},{type:"object",properties:{id:{type:"string",description:"The id of the log stream"},name:{type:"string",description:"log stream name"},status:{type:"string",description:"The status of the log stream. Possible values: `active`, `paused`, `suspended`",enum:["active","paused","suspended"]},type:{type:"string",enum:["eventbridge"]},filters:{type:"array",description:"Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered.",items:{type:"object",properties:{type:{type:"string",description:"Filter type. Currently `category` is the only valid type.",enum:["category"]},name:{type:"string",description:"Category group name",enum:["auth.ancillary.fail","auth.ancillary.success","auth.login.fail","auth.login.notification","auth.login.success","auth.logout.fail","auth.logout.success","auth.signup.fail","auth.signup.success","auth.silent_auth.fail","auth.silent_auth.success","auth.token_exchange.fail","auth.token_exchange.success","management.fail","management.success","system.notification","user.fail","user.notification","user.success","other"]}}}},sink:{type:"object",required:["awsAccountId","awsRegion"],properties:{awsAccountId:{type:"string",description:"AWS account ID"},awsRegion:{type:"string",description:"The region in which the EventBridge event source will be created",enum:["ap-east-1","ap-northeast-1","ap-northeast-2","ap-northeast-3","ap-south-1","ap-southeast-1","ap-southeast-2","ca-central-1","cn-north-1","cn-northwest-1","eu-central-1","eu-north-1","eu-west-1","eu-west-2","eu-west-3","me-south-1","sa-east-1","us-gov-east-1","us-gov-west-1","us-east-1","us-east-2","us-west-1","us-west-2"]},awsPartnerEventSource:{type:"string",description:"AWS EventBridge partner event source"}}}}},{type:"object",properties:{id:{type:"string",description:"The id of the log stream"},name:{type:"string",description:"log stream name"},status:{type:"string",description:"The status of the log stream. Possible values: `active`, `paused`, `suspended`",enum:["active","paused","suspended"]},type:{type:"string",enum:["eventgrid"]},filters:{type:"array",description:"Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered.",items:{type:"object",properties:{type:{type:"string",description:"Filter type. Currently `category` is the only valid type.",enum:["category"]},name:{type:"string",description:"Category group name",enum:["auth.ancillary.fail","auth.ancillary.success","auth.login.fail","auth.login.notification","auth.login.success","auth.logout.fail","auth.logout.success","auth.signup.fail","auth.signup.success","auth.silent_auth.fail","auth.silent_auth.success","auth.token_exchange.fail","auth.token_exchange.success","management.fail","management.success","system.notification","user.fail","user.notification","user.success","other"]}}}},sink:{type:"object",required:["azureSubscriptionId","azureRegion","azureResourceGroup"],properties:{azureSubscriptionId:{type:"string",description:"Subscription ID"},azureRegion:{type:"string",description:"Azure Region Name",enum:["australiacentral","australiaeast","australiasoutheast","brazilsouth","canadacentral","canadaeast","centralindia","centralus","eastasia","eastus","eastus2","francecentral","germanywestcentral","japaneast","japanwest","koreacentral","koreasouth","northcentralus","northeurope","norwayeast","southafricanorth","southcentralus","southeastasia","southindia","switzerlandnorth","uaenorth","uksouth","ukwest","westcentralus","westeurope","westindia","westus","westus2"]},azureResourceGroup:{type:"string",description:"Resource Group"},azurePartnerTopic:{type:"string",description:"Partner Topic"}}}}},{type:"object",properties:{id:{type:"string",description:"The id of the log stream"},name:{type:"string",description:"log stream name"},status:{type:"string",description:"The status of the log stream. Possible values: `active`, `paused`, `suspended`",enum:["active","paused","suspended"]},type:{type:"string",enum:["datadog"]},filters:{type:"array",description:"Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered.",items:{type:"object",properties:{type:{type:"string",description:"Filter type. Currently `category` is the only valid type.",enum:["category"]},name:{type:"string",description:"Category group name",enum:["auth.ancillary.fail","auth.ancillary.success","auth.login.fail","auth.login.notification","auth.login.success","auth.logout.fail","auth.logout.success","auth.signup.fail","auth.signup.success","auth.silent_auth.fail","auth.silent_auth.success","auth.token_exchange.fail","auth.token_exchange.success","management.fail","management.success","system.notification","user.fail","user.notification","user.success","other"]}}}},sink:{type:"object",required:["datadogApiKey","datadogRegion"],properties:{datadogApiKey:{type:"string",description:"Datadog API Key"},datadogRegion:{type:"string",description:"Datadog region",enum:["us","eu","us3","us5"]}}}}},{type:"object",properties:{id:{type:"string",description:"The id of the log stream"},name:{type:"string",description:"log stream name"},status:{type:"string",description:"The status of the log stream. Possible values: `active`, `paused`, `suspended`",enum:["active","paused","suspended"]},type:{type:"string",enum:["splunk"]},filters:{type:"array",description:"Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered.",items:{type:"object",properties:{type:{type:"string",description:"Filter type. Currently `category` is the only valid type.",enum:["category"]},name:{type:"string",description:"Category group name",enum:["auth.ancillary.fail","auth.ancillary.success","auth.login.fail","auth.login.notification","auth.login.success","auth.logout.fail","auth.logout.success","auth.signup.fail","auth.signup.success","auth.silent_auth.fail","auth.silent_auth.success","auth.token_exchange.fail","auth.token_exchange.success","management.fail","management.success","system.notification","user.fail","user.notification","user.success","other"]}}}},sink:{type:"object",required:["splunkDomain","splunkToken","splunkPort","splunkSecure"],properties:{splunkDomain:{type:"string",description:"Splunk URL Endpoint"},splunkPort:{type:"string",description:"Port"},splunkToken:{type:"string",description:"Splunk token"},splunkSecure:{type:"boolean",description:"Verify TLS certificate"}}}}},{type:"object",properties:{id:{type:"string",description:"The id of the log stream"},name:{type:"string",description:"log stream name"},status:{type:"string",description:"The status of the log stream. Possible values: `active`, `paused`, `suspended`",enum:["active","paused","suspended"]},type:{type:"string",enum:["sumo"]},filters:{type:"array",description:"Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered.",items:{type:"object",properties:{type:{type:"string",description:"Filter type. Currently `category` is the only valid type.",enum:["category"]},name:{type:"string",description:"Category group name",enum:["auth.ancillary.fail","auth.ancillary.success","auth.login.fail","auth.login.notification","auth.login.success","auth.logout.fail","auth.logout.success","auth.signup.fail","auth.signup.success","auth.silent_auth.fail","auth.silent_auth.success","auth.token_exchange.fail","auth.token_exchange.success","management.fail","management.success","system.notification","user.fail","user.notification","user.success","other"]}}}},sink:{type:"object",required:["sumoSourceAddress"],properties:{sumoSourceAddress:{type:"string",description:"HTTP Source Address"}}}}},{type:"object",properties:{id:{type:"string",description:"The id of the log stream"},name:{type:"string",description:"log stream name"},status:{type:"string",description:"The status of the log stream. Possible values: `active`, `paused`, `suspended`",enum:["active","paused","suspended"]},type:{type:"string",enum:["segment"]},filters:{type:"array",description:"Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered.",items:{type:"object",properties:{type:{type:"string",description:"Filter type. Currently `category` is the only valid type.",enum:["category"]},name:{type:"string",description:"Category group name",enum:["auth.ancillary.fail","auth.ancillary.success","auth.login.fail","auth.login.notification","auth.login.success","auth.logout.fail","auth.logout.success","auth.signup.fail","auth.signup.success","auth.silent_auth.fail","auth.silent_auth.success","auth.token_exchange.fail","auth.token_exchange.success","management.fail","management.success","system.notification","user.fail","user.notification","user.success","other"]}}}},sink:{type:"object",required:["segmentWriteKey"],properties:{segmentWriteKey:{type:"string",description:"Segment write key"}}}}},{type:"object",properties:{id:{type:"string",description:"The id of the log stream"},name:{type:"string",description:"log stream name"},status:{type:"string",description:"The status of the log stream. Possible values: `active`, `paused`, `suspended`",enum:["active","paused","suspended"]},type:{type:"string",enum:["mixpanel"]},filters:{type:"array",description:"Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered.",items:{type:"object",properties:{type:{type:"string",description:"Filter type. Currently `category` is the only valid type.",enum:["category"]},name:{type:"string",description:"Category group name",enum:["auth.ancillary.fail","auth.ancillary.success","auth.login.fail","auth.login.notification","auth.login.success","auth.logout.fail","auth.logout.success","auth.signup.fail","auth.signup.success","auth.silent_auth.fail","auth.silent_auth.success","auth.token_exchange.fail","auth.token_exchange.success","management.fail","management.success","system.notification","user.fail","user.notification","user.success","other"]}}}},sink:{type:"object",required:["mixpanelRegion","mixpanelProjectId","mixpanelServiceAccountUsername","mixpanelServiceAccountPassword"],properties:{mixpanelRegion:{type:"string",description:"Mixpanel Region",enum:["us","eu"]},mixpanelProjectId:{type:"string",description:"Mixpanel Project Id"},mixpanelServiceAccountUsername:{type:"string",description:"Mixpanel Service Account Username"},mixpanelServiceAccountPassword:{type:"string",description:"Mixpanel Service Account Password"}}}}}]}}}},401:{description:"Invalid signature received for JSON Web Token validation."},403:{description:"The account is not allowed to perform this operation."},404:{description:"The log stream does not exist."},429:{description:"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."}},operationId:"get_log-streams_by_id",security:[{bearerAuth:[]},{oAuth2ClientCredentials:["read:log_streams"]}],method:"get",path:"/log-streams/{id}",servers:[{url:"https://login0.local.dev.auth0.com/api/v2"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"jwt"},oAuth2ClientCredentials:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://login0.local.dev.auth0.com/oauth/token/","x-form-parameters":{audience:"https://login0.local.dev.auth0.com/api/v2/"},scopes:{"delete:actions":"Delete Actions","read:actions":"Read Actions","update:actions":"Update Actions","create:actions":"Create Actions","delete:anomaly_blocks":"Delete Anomaly Detection Blocks","read:anomaly_blocks":"Read Anomaly Detection Blocks","read:attack_protection":"Read attack protection","update:attack_protection":"Update attack protection","blacklist:tokens":"Blacklist Tokens","read:branding":"Read branding settings","update:branding":"Update branding settings","delete:branding":"Delete branding settings","delete:client_grants":"Delete Client Grants","read:client_grants":"Read Client Grants","update:client_grants":"Update Client Grants","create:client_grants":"Create Client Grants","delete:clients":"Delete Clients","read:clients":"Read Clients","update:clients":"Update Clients","create:clients":"Create Clients","delete:client_credentials":"Delete Client Credentials","read:client_credentials":"Read Client Credentials","update:client_credentials":"Update Client Credentials","create:client_credentials":"Create Client Credentials","delete:client_keys":"Delete Client Keys","read:client_keys":"Read Client Keys","update:client_keys":"Update Client Keys","create:client_keys":"Create Client Keys","delete:connections":"Delete Connections","read:connections":"Read Connections","update:connections":"Update Connections","create:connections":"Create Connections","delete:custom_domains":"Delete custom domain configurations","read:custom_domains":"Read custom domain configurations","update:custom_domains":"Update custom domain configurations","create:custom_domains":"Configure new custom domains","update:device_codes":"Update Device Codes","read:device_codes":"Read Device Codes","delete:device_credentials":"Delete Device Credentials","read:device_credentials":"Read Device Credentials","update:device_credentials":"Update Device Credentials","create:device_credentials":"Create Device Credentials","delete:current_user_device_credentials":"Delete Current User Device Credentials","read:current_user_device_credentials":"Read Current User Device Credentials","create:current_user_device_credentials":"Create Current User Device Credentials","delete:email_templates":"Delete email templates","read:email_templates":"Read email emplates","update:email_templates":"Update email templates","create:email_templates":"Create email templates","read:email_triggers":"Read email triggers","update:email_triggers":"Update email triggers","delete:email_provider":"Delete Email Provider","read:email_provider":"Read Email Provider","update:email_provider":"Update Email Provider","create:email_provider":"Create Email Provider","read:entitlements":"Read entitlements","delete:guardian_enrollments":"Delete Guardian enrollments","read:guardian_enrollments":"Read Guardian enrollments","create:guardian_enrollment_tickets":"Create enrollment tickets for Guardian","read:guardian_factors":"Read Guardian factors configuration","update:guardian_factors":"Update Guardian factors","read:grants":"Read User Grants","delete:grants":"Delete User Grants","delete:hooks":"Delete Hooks","read:hooks":"Read Hooks","update:hooks":"Update Hooks","create:hooks":"Create Hooks","read:insights":"Read Insights","delete:integrations":"Delete integrations","read:integrations":"Read integrations","update:integrations":"Update integrations","create:integrations":"Create integrations","read:limits":"Read entity limits","update:limits":"Update entity limits","read:log_streams":"Read log_streams","delete:log_streams":"Delete log_streams","update:log_streams":"Update log_streams","create:log_streams":"Create log_streams","read:logs":"Read Logs","read:logs_users":"Read logs relating to users","read:mfa_policies":"Read Multifactor Authentication policies","update:mfa_policies":"Update Multifactor Authentication policies","delete:organization_connections":"Delete organization connections","read:organization_connections":"Read organization connections","update:organization_connections":"Update organization connections","create:organization_connections":"Create organization connections","delete:organization_invitations":"Delete organization invitations","read:organization_invitations":"Read organization invitations","create:organization_invitations":"Create organization invitations","delete:organization_member_roles":"Delete organization member roles","read:organization_member_roles":"Read organization member roles","create:organization_member_roles":"Create organization member roles","delete:organizations":"Delete organizations","read:organizations":"Read organizations","create:organizations":"Create organizations","update:organizations":"Update organizations","delete:organization_members":"Delete organization members","read:organization_members":"Read organization members","create:organization_members":"Create organization members","read:organizations_summary":"Read organization summary","create:passwords_checking_job":"Create password checking jobs","delete:passwords_checking_job":"Deletes password checking job and all its resources","read:prompts":"Read prompts settings","update:prompts":"Update prompts settings","delete:requested_scopes":"Delete Requested Scopes","read:requested_scopes":"Read Requested Scopes","update:requested_scopes":"Update Requested Scopes","create:requested_scopes":"Create Requested Scopes","delete:resource_servers":"Delete Resource Servers","read:resource_servers":"Read Resource Servers","update:resource_servers":"Update Resource Servers","create:resource_servers":"Create Resource Servers","create:role_members":"Create role members","read:role_members":"Read role members","update:role_members":"Update role members","delete:role_members":"Delete role members","delete:roles":"Delete roles","read:roles":"Read roles","update:roles":"Update roles","create:roles":"Create roles","delete:rules":"Delete Rules","read:rules":"Read Rules","update:rules":"Update Rules","create:rules":"Create Rules","delete:rules_configs":"Delete Rules Configs","read:rules_configs":"Read Rules Configs","update:rules_configs":"Update Rules Configs","delete:signing_keys":"Delete signing keys","create:signing_keys":"Create signing keys","read:signing_keys":"Read signing keys","update:signing_keys":"Update signing keys","delete:shields":"Delete Shields","read:shields":"Read Shields","update:shields":"Update Shields","create:shields":"Create Shields","read:stats":"Read Stats","create:test_email_dispatch":"Create test email dispatch","read:tenant_settings":"Read Tenant Settings","update:tenant_settings":"Update Tenant Settings","read:triggers":"Read Triggers","update:triggers":"Update Triggers","create:user_tickets":"Create User Tickets","delete:users":"Delete Users","read:users":"Read Users","update:users":"Update Users","create:users":"Create Users","read:current_user":"Read Current User","delete:current_user":"Delete Current User","read:user_idp_tokens":"Read Users IDP tokens","delete:users_app_metadata":"Delete Users App Metadata","read:users_app_metadata":"Read Users App Metadata","update:users_app_metadata":"Update Users App Metadata","create:users_app_metadata":"Create Users App Metadata","delete:user_custom_blocks":"Delete Custom User Blocks","read:user_custom_blocks":"Read Custom User Blocks","create:user_custom_blocks":"Create Custom User Blocks","update:current_user_identities":"Update Current User Identities"}}}}},info:{title:"Auth0 Management API",description:"Auth0 Management API v2.",termsOfService:"https://auth0.com/web-terms/",version:"2.0"},postman:{name:"Get log stream by ID",description:{content:'Retrieve a log stream configuration and status.\\n<h5>Sample responses</h5><h5>Amazon EventBridge Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "eventbridge",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"awsAccountId": "string",\\n\t\t"awsRegion": "string",\\n\t\t"awsPartnerEventSource": "string"\\n\t}\\n}</code></pre> <h5>HTTP Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "http",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"httpContentFormat": "JSONLINES|JSONARRAY",\\n\t\t"httpContentType": "string",\\n\t\t"httpEndpoint": "string",\\n\t\t"httpAuthorization": "string"\\n\t}\\n}</code></pre> <h5>Datadog Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "datadog",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"datadogRegion": "string",\\n\t\t"datadogApiKey": "string"\\n\t}\\n}</code></pre> <h5>Splunk Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "splunk",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"splunkDomain": "string",\\n\t\t"splunkToken": "string",\\n\t\t"splunkPort": "string",\\n\t\t"splunkSecure": "boolean"\\n\t}\\n}</code></pre> <h5>Sumo Logic Log Stream</h5><pre><code>{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "sumo",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"sumoSourceAddress": "string",\\n\t}\\n}</code></pre> <h5>Status</h5> The <code>status</code> of a log stream maybe any of the following:\\n1. <code>active</code> - Stream is currently enabled.\\n2. <code>paused</code> - Stream is currently user disabled and will not attempt log delivery.\\n3. <code>suspended</code> - Stream is currently disabled because of errors and will not attempt log delivery.\\n',type:"text/plain"},url:{path:["log-streams",":id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The id of the log stream to get",type:"text/plain"},type:"any",value:"<string>",key:"id"}]},method:"GET",auth:{type:"oauth2",oauth2:[]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/get-log-stream-by-id",previous:{title:"Create a log stream",permalink:"/api/create-a-log-stream"},next:{title:"Delete log stream",permalink:"/api/delete-log-stream"}},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-log-stream-by-id"},"Get log stream by ID"),(0,a.kt)("p",null,"Retrieve a log stream configuration and status.\\n",(0,a.kt)("h5",null,"Sample responses"),(0,a.kt)("h5",null,"Amazon EventBridge Log Stream"),(0,a.kt)("pre",null,(0,a.kt)("code",null,'{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "eventbridge",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"awsAccountId": "string",\\n\t\t"awsRegion": "string",\\n\t\t"awsPartnerEventSource": "string"\\n\t}\\n}'))," ",(0,a.kt)("h5",null,"HTTP Log Stream"),(0,a.kt)("pre",null,(0,a.kt)("code",null,'{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "http",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"httpContentFormat": "JSONLINES|JSONARRAY",\\n\t\t"httpContentType": "string",\\n\t\t"httpEndpoint": "string",\\n\t\t"httpAuthorization": "string"\\n\t}\\n}'))," ",(0,a.kt)("h5",null,"Datadog Log Stream"),(0,a.kt)("pre",null,(0,a.kt)("code",null,'{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "datadog",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"datadogRegion": "string",\\n\t\t"datadogApiKey": "string"\\n\t}\\n}'))," ",(0,a.kt)("h5",null,"Splunk Log Stream"),(0,a.kt)("pre",null,(0,a.kt)("code",null,'{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "splunk",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"splunkDomain": "string",\\n\t\t"splunkToken": "string",\\n\t\t"splunkPort": "string",\\n\t\t"splunkSecure": "boolean"\\n\t}\\n}'))," ",(0,a.kt)("h5",null,"Sumo Logic Log Stream"),(0,a.kt)("pre",null,(0,a.kt)("code",null,'{\\n\t"id": "string",\\n\t"name": "string",\\n\t"type": "sumo",\\n\t"status": "active|paused|suspended",\\n\t"sink": {\\n\t\t"sumoSourceAddress": "string",\\n\t}\\n}'))," ",(0,a.kt)("h5",null,"Status")," The ",(0,a.kt)("code",null,"status")," of a log stream maybe any of the following:\\n1. ",(0,a.kt)("code",null,"active")," - Stream is currently enabled.\\n2. ",(0,a.kt)("code",null,"paused")," - Stream is currently user disabled and will not attempt log delivery.\\n3. ",(0,a.kt)("code",null,"suspended")," - Stream is currently disabled because of errors and will not attempt log delivery.\\n"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The id of the log stream to get")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Returning log stream."))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"401")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Invalid signature received for JSON Web Token validation."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"403")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The account is not allowed to perform this operation."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"404")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The log stream does not exist."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"429")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Too many requests. Check the X-RateLimit-Limit, X-RateLimit-Remaining and X-RateLimit-Reset headers."))),(0,a.kt)("div",null))))))}u.isMDXComponent=!0}}]);