(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(t,e,a){t.exports=a(59)},43:function(t,e,a){},44:function(t,e,a){},46:function(t,e,a){},59:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),r=a(11),o=a.n(r),c=(a(43),a(21)),p=a(12),n=a(13),l=a(20),u=a(18),m=a(16),d=a(19),f=a(22),h=(a(33),a(79));a(44);function y(){return window.location.hash&&window.location.hash.split("=")[1].split("&token")[0]}var b,v,_,k,E,S,H,T,A=a(29),I=a(3),g="https://api.spotify.com/v1",O=function(){var t=new Headers;return t.append("Authorization","Bearer ".concat(y())),{headers:t}},x=function(){function t(){Object(p.a)(this,t)}return Object(n.a)(t,null,[{key:"getTopTracks",value:function(){return fetch("".concat(g,"/me/top/tracks"),O())}},{key:"getRecommendationsOnTracks",value:function(t){return fetch("".concat(g,"/recommendations?seed_tracks=").concat(t),O())}}]),t}(),N={items:[{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0XHiH53dHrvbwfjYM7en7I"},href:"https://api.spotify.com/v1/artists/0XHiH53dHrvbwfjYM7en7I",id:"0XHiH53dHrvbwfjYM7en7I",name:"Chris Cornell",type:"artist",uri:"spotify:artist:0XHiH53dHrvbwfjYM7en7I"}],available_markets:[],external_urls:{spotify:"https://open.spotify.com/album/7sxKTBQ32NQxpdbYecBmU0"},href:"https://api.spotify.com/v1/albums/7sxKTBQ32NQxpdbYecBmU0",id:"7sxKTBQ32NQxpdbYecBmU0",images:[{height:640,url:"https://i.scdn.co/image/e1f9ace266eb8114803a8475a2f9c6261b236e18",width:634},{height:300,url:"https://i.scdn.co/image/66f79b7f66ba3ea27724b5c551100806107d3404",width:297},{height:64,url:"https://i.scdn.co/image/bbed574d0c2454a8dd5eb0c365d25ec9f4e717c5",width:63}],name:"Carry On (International Version)",release_date:"2007-01-01",release_date_precision:"day",total_tracks:15,type:"album",uri:"spotify:album:7sxKTBQ32NQxpdbYecBmU0"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0XHiH53dHrvbwfjYM7en7I"},href:"https://api.spotify.com/v1/artists/0XHiH53dHrvbwfjYM7en7I",id:"0XHiH53dHrvbwfjYM7en7I",name:"Chris Cornell",type:"artist",uri:"spotify:artist:0XHiH53dHrvbwfjYM7en7I"}],available_markets:[],disc_number:1,duration_ms:240120,episode:!1,explicit:!1,external_ids:{isrc:"USUM70613448"},external_urls:{spotify:"https://open.spotify.com/track/4HHIVS7mHAXqXVebo3k5Um"},href:"https://api.spotify.com/v1/tracks/4HHIVS7mHAXqXVebo3k5Um",id:"4HHIVS7mHAXqXVebo3k5Um",is_local:!1,name:'You Know My Name - From "Casino Royale" Soundtrack',popularity:5,preview_url:null,track:!0,track_number:14,type:"track",uri:"spotify:track:4HHIVS7mHAXqXVebo3k5Um"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/3hE8S8ohRErocpkY7uJW4a"},href:"https://api.spotify.com/v1/artists/3hE8S8ohRErocpkY7uJW4a",id:"3hE8S8ohRErocpkY7uJW4a",name:"Within Temptation",type:"artist",uri:"spotify:artist:3hE8S8ohRErocpkY7uJW4a"}],available_markets:[],external_urls:{spotify:"https://open.spotify.com/album/1gzju9uSnGYqFIc8ISuPax"},href:"https://api.spotify.com/v1/albums/1gzju9uSnGYqFIc8ISuPax",id:"1gzju9uSnGYqFIc8ISuPax",images:[{height:640,url:"https://i.scdn.co/image/6eab6be7752e1ab2238dde204674f0c3a6b02a33",width:628},{height:300,url:"https://i.scdn.co/image/ff48c8872f145f96201228cb69b8c2b191ec8834",width:295},{height:64,url:"https://i.scdn.co/image/75d19e157b479f01dfbdd7917056479ba076f5b3",width:63}],name:"The Heart Of Everything",release_date:"2007",release_date_precision:"year",total_tracks:11,type:"album",uri:"spotify:album:1gzju9uSnGYqFIc8ISuPax"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/3hE8S8ohRErocpkY7uJW4a"},href:"https://api.spotify.com/v1/artists/3hE8S8ohRErocpkY7uJW4a",id:"3hE8S8ohRErocpkY7uJW4a",name:"Within Temptation",type:"artist",uri:"spotify:artist:3hE8S8ohRErocpkY7uJW4a"},{external_urls:{spotify:"https://open.spotify.com/artist/0o3RyxUXp69fLCpMxuOLsz"},href:"https://api.spotify.com/v1/artists/0o3RyxUXp69fLCpMxuOLsz",id:"0o3RyxUXp69fLCpMxuOLsz",name:"Keith Caputo",type:"artist",uri:"spotify:artist:0o3RyxUXp69fLCpMxuOLsz"}],available_markets:[],disc_number:1,duration_ms:315946,episode:!1,explicit:!1,external_ids:{isrc:"NLR260600013"},external_urls:{spotify:"https://open.spotify.com/track/0KAhFZnr4vI3HaGWAvweoM"},href:"https://api.spotify.com/v1/tracks/0KAhFZnr4vI3HaGWAvweoM",id:"0KAhFZnr4vI3HaGWAvweoM",is_local:!1,name:"What Have You Done (feat. Keith Caputo)",popularity:0,preview_url:null,track:!0,track_number:2,type:"track",uri:"spotify:track:0KAhFZnr4vI3HaGWAvweoM"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0yNy8fi1yBBq526E6mx4Zs"},href:"https://api.spotify.com/v1/artists/0yNy8fi1yBBq526E6mx4Zs",id:"0yNy8fi1yBBq526E6mx4Zs",name:"Orianthi",type:"artist",uri:"spotify:artist:0yNy8fi1yBBq526E6mx4Zs"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GR","GT","HK","HN","HU","ID","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MY","NI","NO","NZ","OM","PA","PE","PH","PL","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/4ps9d2RTyOhEOjRBwHhFYH"},href:"https://api.spotify.com/v1/albums/4ps9d2RTyOhEOjRBwHhFYH",id:"4ps9d2RTyOhEOjRBwHhFYH",images:[{height:640,url:"https://i.scdn.co/image/5355106395e54e55956c9ce6bf231477478adf34",width:640},{height:300,url:"https://i.scdn.co/image/d3d65135f64d81eabbe8928649b0fae2260cbb5b",width:300},{height:64,url:"https://i.scdn.co/image/41ce18f015d0b395920f31956e7fdf999874acb6",width:64}],name:"Believe (International Version)",release_date:"2009-01-01",release_date_precision:"day",total_tracks:12,type:"album",uri:"spotify:album:4ps9d2RTyOhEOjRBwHhFYH"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0yNy8fi1yBBq526E6mx4Zs"},href:"https://api.spotify.com/v1/artists/0yNy8fi1yBBq526E6mx4Zs",id:"0yNy8fi1yBBq526E6mx4Zs",name:"Orianthi",type:"artist",uri:"spotify:artist:0yNy8fi1yBBq526E6mx4Zs"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GR","GT","HK","HN","HU","ID","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MY","NI","NO","NZ","OM","PA","PE","PH","PL","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","VN","ZA"],disc_number:1,duration_ms:183560,episode:!1,explicit:!1,external_ids:{isrc:"USUM70997303"},external_urls:{spotify:"https://open.spotify.com/track/5zTHrgDaT02LDyLHd70txv"},href:"https://api.spotify.com/v1/tracks/5zTHrgDaT02LDyLHd70txv",id:"5zTHrgDaT02LDyLHd70txv",is_local:!1,name:"Suffocated",popularity:31,preview_url:null,track:!0,track_number:2,type:"track",uri:"spotify:track:5zTHrgDaT02LDyLHd70txv"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/41nB823nb3wxEI25UeGHqG"},href:"https://api.spotify.com/v1/artists/41nB823nb3wxEI25UeGHqG",id:"41nB823nb3wxEI25UeGHqG",name:"Stam1na",type:"artist",uri:"spotify:artist:41nB823nb3wxEI25UeGHqG"}],available_markets:["AE","AR","BH","BO","BR","CA","CL","CO","CR","DO","EC","EG","FI","GT","HK","HN","ID","IN","JO","KW","LB","MX","MY","NI","OM","PA","PE","PH","PS","PY","QA","SA","SG","SV","TH","TW","UY","VN"],external_urls:{spotify:"https://open.spotify.com/album/6Kcad9P3QeoWqM79xVOv7y"},href:"https://api.spotify.com/v1/albums/6Kcad9P3QeoWqM79xVOv7y",id:"6Kcad9P3QeoWqM79xVOv7y",images:[{height:640,url:"https://i.scdn.co/image/0ccccb201ca7ff0c1367e78b08baa40220190833",width:640},{height:300,url:"https://i.scdn.co/image/84daac129231486755185f44b50cb6bdf1c2b64e",width:300},{height:64,url:"https://i.scdn.co/image/ca29ffd1785c22897e3a1d56afaa087a01951651",width:64}],name:"SLK",release_date:"2014-02-07",release_date_precision:"day",total_tracks:11,type:"album",uri:"spotify:album:6Kcad9P3QeoWqM79xVOv7y"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/41nB823nb3wxEI25UeGHqG"},href:"https://api.spotify.com/v1/artists/41nB823nb3wxEI25UeGHqG",id:"41nB823nb3wxEI25UeGHqG",name:"Stam1na",type:"artist",uri:"spotify:artist:41nB823nb3wxEI25UeGHqG"}],available_markets:["AE","AR","BH","BO","BR","CA","CL","CO","CR","DO","EC","EG","FI","GT","HK","HN","ID","IN","JO","KW","LB","MX","MY","NI","OM","PA","PE","PH","PS","PY","QA","SA","SG","SV","TH","TW","UY","VN"],disc_number:1,duration_ms:227080,episode:!1,explicit:!1,external_ids:{isrc:"FI5ST1400007"},external_urls:{spotify:"https://open.spotify.com/track/5mu5oz5S8DkWKEjzYs0Udy"},href:"https://api.spotify.com/v1/tracks/5mu5oz5S8DkWKEjzYs0Udy",id:"5mu5oz5S8DkWKEjzYs0Udy",is_local:!1,name:"Dynamo",popularity:36,preview_url:"https://p.scdn.co/mp3-preview/df0acdca2baad399f83b710a4f9a7d21a85fcd6c?cid=4e95c274294946ecad7b116680b1de44",track:!0,track_number:7,type:"track",uri:"spotify:track:5mu5oz5S8DkWKEjzYs0Udy"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0blJzvevdXrp21YeI2vbco"},href:"https://api.spotify.com/v1/artists/0blJzvevdXrp21YeI2vbco",id:"0blJzvevdXrp21YeI2vbco",name:"Type O Negative",type:"artist",uri:"spotify:artist:0blJzvevdXrp21YeI2vbco"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/5LtfWD1Iby98F4k2WPgWeV"},href:"https://api.spotify.com/v1/albums/5LtfWD1Iby98F4k2WPgWeV",id:"5LtfWD1Iby98F4k2WPgWeV",images:[{height:640,url:"https://i.scdn.co/image/3ed1b926c946221d5d0fecb5a6d6a293f320e956",width:640},{height:300,url:"https://i.scdn.co/image/1ef6ab848f87611ec58819b650f7b8cce6baf5d0",width:300},{height:64,url:"https://i.scdn.co/image/18c1854f4efb9693cabd7a7cf6944a82ca406d39",width:64}],name:"The Complete Roadrunner Collection 1991-2003",release_date:"2013",release_date_precision:"year",total_tracks:71,type:"album",uri:"spotify:album:5LtfWD1Iby98F4k2WPgWeV"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0blJzvevdXrp21YeI2vbco"},href:"https://api.spotify.com/v1/artists/0blJzvevdXrp21YeI2vbco",id:"0blJzvevdXrp21YeI2vbco",name:"Type O Negative",type:"artist",uri:"spotify:artist:0blJzvevdXrp21YeI2vbco"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:6,duration_ms:308826,episode:!1,explicit:!1,external_ids:{isrc:"NLA320320181"},external_urls:{spotify:"https://open.spotify.com/track/2PsHGG7g0UGrXwm5TDJukh"},href:"https://api.spotify.com/v1/tracks/2PsHGG7g0UGrXwm5TDJukh",id:"2PsHGG7g0UGrXwm5TDJukh",is_local:!1,name:"I Don't Wanna Be Me",popularity:28,preview_url:"https://p.scdn.co/mp3-preview/e678bd296c51f35f51a01aaba9cb26eee97f827c?cid=4e95c274294946ecad7b116680b1de44",track:!0,track_number:2,type:"track",uri:"spotify:track:2PsHGG7g0UGrXwm5TDJukh"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0cc6vw3VN8YlIcvr1v7tBL"},href:"https://api.spotify.com/v1/artists/0cc6vw3VN8YlIcvr1v7tBL",id:"0cc6vw3VN8YlIcvr1v7tBL",name:"M\xf6tley Cr\xfce",type:"artist",uri:"spotify:artist:0cc6vw3VN8YlIcvr1v7tBL"}],available_markets:[],external_urls:{spotify:"https://open.spotify.com/album/3RhyN522lhBDZSbi7Axl9z"},href:"https://api.spotify.com/v1/albums/3RhyN522lhBDZSbi7Axl9z",id:"3RhyN522lhBDZSbi7Axl9z",images:[{height:640,url:"https://i.scdn.co/image/36e02b9ac03d73e0588469aeb1a946f6033a7596",width:640},{height:300,url:"https://i.scdn.co/image/77c1d13ce5fc34e48d49ab9ab735443a811e03ef",width:300},{height:64,url:"https://i.scdn.co/image/aae0b6769f983dae6637c939d37c639fb4ac212d",width:64}],name:"Dr. Feel Good",release_date:"1989",release_date_precision:"year",total_tracks:16,type:"album",uri:"spotify:album:3RhyN522lhBDZSbi7Axl9z"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0cc6vw3VN8YlIcvr1v7tBL"},href:"https://api.spotify.com/v1/artists/0cc6vw3VN8YlIcvr1v7tBL",id:"0cc6vw3VN8YlIcvr1v7tBL",name:"M\xf6tley Cr\xfce",type:"artist",uri:"spotify:artist:0cc6vw3VN8YlIcvr1v7tBL"}],available_markets:[],disc_number:1,duration_ms:289920,episode:!1,explicit:!1,external_ids:{isrc:"USBY29900212"},external_urls:{spotify:"https://open.spotify.com/track/3srPnN4EqPhdvMROVESuIA"},href:"https://api.spotify.com/v1/tracks/3srPnN4EqPhdvMROVESuIA",id:"3srPnN4EqPhdvMROVESuIA",is_local:!1,name:"Dr. Feelgood",popularity:1,preview_url:null,track:!0,track_number:2,type:"track",uri:"spotify:track:3srPnN4EqPhdvMROVESuIA"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2C7RDMSpyGZFyoSnvOeU4J"},href:"https://api.spotify.com/v1/artists/2C7RDMSpyGZFyoSnvOeU4J",id:"2C7RDMSpyGZFyoSnvOeU4J",name:"Broilers",type:"artist",uri:"spotify:artist:2C7RDMSpyGZFyoSnvOeU4J"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/5t6qetiwL3hxBnlNiNRcV9"},href:"https://api.spotify.com/v1/albums/5t6qetiwL3hxBnlNiNRcV9",id:"5t6qetiwL3hxBnlNiNRcV9",images:[{height:640,url:"https://i.scdn.co/image/928341204ba5f1a84920cd5b4ba953f328c77676",width:640},{height:300,url:"https://i.scdn.co/image/263fff58cd25fb206525fbd77464fa023379ad16",width:300},{height:64,url:"https://i.scdn.co/image/6d90bc45e58fa6090f644bf0c288b7ccd93c49e3",width:64}],name:"Noir",release_date:"2014-02-07",release_date_precision:"day",total_tracks:16,type:"album",uri:"spotify:album:5t6qetiwL3hxBnlNiNRcV9"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2C7RDMSpyGZFyoSnvOeU4J"},href:"https://api.spotify.com/v1/artists/2C7RDMSpyGZFyoSnvOeU4J",id:"2C7RDMSpyGZFyoSnvOeU4J",name:"Broilers",type:"artist",uri:"spotify:artist:2C7RDMSpyGZFyoSnvOeU4J"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:254020,episode:!1,explicit:!1,external_ids:{isrc:"GBDHC1428701"},external_urls:{spotify:"https://open.spotify.com/track/71hqL28lU6q0E54twf6gPW"},href:"https://api.spotify.com/v1/tracks/71hqL28lU6q0E54twf6gPW",id:"71hqL28lU6q0E54twf6gPW",is_local:!1,name:"Ist Da Jemand?",popularity:51,preview_url:"https://p.scdn.co/mp3-preview/f598e523fef9cef6778db028ba1f48b26bfe5d99?cid=4e95c274294946ecad7b116680b1de44",track:!0,track_number:1,type:"track",uri:"spotify:track:71hqL28lU6q0E54twf6gPW"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2vhrwzjf9H3icunkVFi9tq"},href:"https://api.spotify.com/v1/artists/2vhrwzjf9H3icunkVFi9tq",id:"2vhrwzjf9H3icunkVFi9tq",name:"Smash Into Pieces",type:"artist",uri:"spotify:artist:2vhrwzjf9H3icunkVFi9tq"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/49mtNnqo6orLAMgPPLIECx"},href:"https://api.spotify.com/v1/albums/49mtNnqo6orLAMgPPLIECx",id:"49mtNnqo6orLAMgPPLIECx",images:[{height:640,url:"https://i.scdn.co/image/03cc8d001dc836cafaf87d03b4a54c1565c1cb12",width:640},{height:300,url:"https://i.scdn.co/image/25fbd162eaae8bbc242e93d03e264e2a8edb6c5b",width:300},{height:64,url:"https://i.scdn.co/image/f4f5bf7bfd323f3c0e43fb23978e807ffd6250d5",width:64}],name:"The Apocalypse DJ",release_date:"2015-02-25",release_date_precision:"day",total_tracks:11,type:"album",uri:"spotify:album:49mtNnqo6orLAMgPPLIECx"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2vhrwzjf9H3icunkVFi9tq"},href:"https://api.spotify.com/v1/artists/2vhrwzjf9H3icunkVFi9tq",id:"2vhrwzjf9H3icunkVFi9tq",name:"Smash Into Pieces",type:"artist",uri:"spotify:artist:2vhrwzjf9H3icunkVFi9tq"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:228466,episode:!1,explicit:!1,external_ids:{isrc:"SEVWR1401301"},external_urls:{spotify:"https://open.spotify.com/track/2trrjXggZzdwQ6YEc4xE6l"},href:"https://api.spotify.com/v1/tracks/2trrjXggZzdwQ6YEc4xE6l",id:"2trrjXggZzdwQ6YEc4xE6l",is_local:!1,name:"Disaster Highway",popularity:38,preview_url:"https://p.scdn.co/mp3-preview/763ac9163ef8dc485814fd5a91435fcad4b6cc33?cid=4e95c274294946ecad7b116680b1de44",track:!0,track_number:3,type:"track",uri:"spotify:track:2trrjXggZzdwQ6YEc4xE6l"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/3o2dn2O0FCVsWDFSh8qxgG"},href:"https://api.spotify.com/v1/artists/3o2dn2O0FCVsWDFSh8qxgG",id:"3o2dn2O0FCVsWDFSh8qxgG",name:"Sabaton",type:"artist",uri:"spotify:artist:3o2dn2O0FCVsWDFSh8qxgG"}],available_markets:["AD","AE","AR","AT","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DO","DZ","EC","EE","EG","ES","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/3zZl82Hq5jeK21uPPD0BF3"},href:"https://api.spotify.com/v1/albums/3zZl82Hq5jeK21uPPD0BF3",id:"3zZl82Hq5jeK21uPPD0BF3",images:[{height:640,url:"https://i.scdn.co/image/d736626591cd9282b7ad2ae677e19dfab1803033",width:639},{height:300,url:"https://i.scdn.co/image/c909afbec46b5057d36b4f121791c2db47e99f48",width:300},{height:64,url:"https://i.scdn.co/image/2ffcca04f5e651a97438d9af200dc18846486bea",width:64}],name:"The Art Of War (Re-Armed)",release_date:"2008",release_date_precision:"year",total_tracks:17,type:"album",uri:"spotify:album:3zZl82Hq5jeK21uPPD0BF3"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/3o2dn2O0FCVsWDFSh8qxgG"},href:"https://api.spotify.com/v1/artists/3o2dn2O0FCVsWDFSh8qxgG",id:"3o2dn2O0FCVsWDFSh8qxgG",name:"Sabaton",type:"artist",uri:"spotify:artist:3o2dn2O0FCVsWDFSh8qxgG"}],available_markets:["AD","AE","AR","AT","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DO","DZ","EC","EE","EG","ES","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:231186,episode:!1,explicit:!1,external_ids:{isrc:"SE2EG1000402"},external_urls:{spotify:"https://open.spotify.com/track/5KjubyAZtsbXKuIy02Qo3N"},href:"https://api.spotify.com/v1/tracks/5KjubyAZtsbXKuIy02Qo3N",id:"5KjubyAZtsbXKuIy02Qo3N",is_local:!1,name:"Ghost Division",popularity:56,preview_url:"https://p.scdn.co/mp3-preview/9f961d63d6409988481724ef00556713af91a3b9?cid=4e95c274294946ecad7b116680b1de44",track:!0,track_number:2,type:"track",uri:"spotify:track:5KjubyAZtsbXKuIy02Qo3N"},video_thumbnail:{url:null}},{added_at:"2017-07-17T05:00:00Z",added_by:{external_urls:{spotify:"https://open.spotify.com/user/"},href:"https://api.spotify.com/v1/users/",id:"",type:"user",uri:"spotify:user:"},is_local:!1,primary_color:null,track:{album:{album_type:"album",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/4iSKnRZAxkmqNok6tv10Se"},href:"https://api.spotify.com/v1/artists/4iSKnRZAxkmqNok6tv10Se",id:"4iSKnRZAxkmqNok6tv10Se",name:"Crazy Town",type:"artist",uri:"spotify:artist:4iSKnRZAxkmqNok6tv10Se"}],available_markets:["US"],external_urls:{spotify:"https://open.spotify.com/album/6sVanbHiwxboqqELYWIk3b"},href:"https://api.spotify.com/v1/albums/6sVanbHiwxboqqELYWIk3b",id:"6sVanbHiwxboqqELYWIk3b",images:[{height:640,url:"https://i.scdn.co/image/eb9fc14da1377778e2df53897780962bec95dee7",width:640},{height:300,url:"https://i.scdn.co/image/48c3751706ea84661ecceae2bc1da229e1d233a7",width:300},{height:64,url:"https://i.scdn.co/image/97cd81f69f38cf1215c4d3bba43c9bedcd6b90f1",width:64}],name:"darkhorse",release_date:"2002-11-12",release_date_precision:"day",total_tracks:13,type:"album",uri:"spotify:album:6sVanbHiwxboqqELYWIk3b"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/4iSKnRZAxkmqNok6tv10Se"},href:"https://api.spotify.com/v1/artists/4iSKnRZAxkmqNok6tv10Se",id:"4iSKnRZAxkmqNok6tv10Se",name:"Crazy Town",type:"artist",uri:"spotify:artist:4iSKnRZAxkmqNok6tv10Se"}],available_markets:["US"],disc_number:1,duration_ms:199333,episode:!1,explicit:!1,external_ids:{isrc:"USSM10211634"},external_urls:{spotify:"https://open.spotify.com/track/0HApP7IdQsjGo39gUbeZo9"},href:"https://api.spotify.com/v1/tracks/0HApP7IdQsjGo39gUbeZo9",id:"0HApP7IdQsjGo39gUbeZo9",is_local:!1,name:"Drowning",popularity:26,preview_url:"https://p.scdn.co/mp3-preview/a55c2328aa3b2034be990868ce469f5c6104f6ee?cid=4e95c274294946ecad7b116680b1de44",track:!0,track_number:3,type:"track",uri:"spotify:track:0HApP7IdQsjGo39gUbeZo9"},video_thumbnail:{url:null}}]},C=(a(46),a(80)),B=a(76),L=a(78),w=a(77),R=function(t){function e(){return Object(p.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(n.a)(e,[{key:"getArtist",value:function(t){return t.artists[0].name}},{key:"getAlbumImage",value:function(t){return t.album.images.slice(-2)[0].url}},{key:"render",value:function(){var t=this.props,e=t.track,a=t.onTrackClick,i=t.isSelected,r=t.className;return s.a.createElement(C.a,{onClick:a&&function(){return a(e)},key:e.id,className:"Track card ".concat(r||""," ").concat(i?"selected":"")},s.a.createElement("div",{className:"details"},s.a.createElement(B.a,{className:"content"},s.a.createElement(w.a,{className:"track-name",component:"h5",variant:"h5"},e.name),s.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},this.getArtist(e)))),s.a.createElement(L.a,{className:"cover",image:this.getAlbumImage(e),title:"album cover"}))}}]),e}(i.Component),P=Object(A.a)((v=function(t){function e(){var t,a;Object(p.a)(this,e);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s))),Object(c.a)(a,"topTracks",_,Object(m.a)(a)),Object(c.a)(a,"error",k,Object(m.a)(a)),Object(c.a)(a,"recommendedTracks",E,Object(m.a)(a)),a}return Object(d.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){var t=this;x.getTopTracks().then(function(t){return t.json()}).then(function(e){console.log(e),e.error?t.error=e.error.message:(console.log("tracks response",e.items),t.topTracks=e.items.map(function(t){return t.track}),e.items.length||(e.items=N.items,t.topTracks=e.items.slice(0,3).map(function(t){return t.track}),console.log("mocked tracks",e.items.map(function(t){return t.track}))))})}},{key:"handleTrackClick",value:function(t){t.selected=!t.selected}},{key:"shouldShowRecommendationsButton",value:function(){return this.topTracks.some(function(t){return t.selected})}},{key:"getRecommendations",value:function(){var t=this,e=this.topTracks.filter(function(t){return t.selected}).map(function(t){return t.id}).join(",");console.log(e),x.getRecommendationsOnTracks(e).then(function(t){return t.json()}).then(function(e){e.tracks&&(t.recommendedTracks=e.tracks,console.log("getRecommendationsOnTracks",e))})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"Tracklist"},this.error&&s.a.createElement("h1",null,this.error),this.topTracks.length?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Your top tracks!"),this.topTracks.map(function(e){return s.a.createElement(R,{key:e.id,onTrackClick:t.handleTrackClick,isSelected:e.selected,track:e})})):null,this.shouldShowRecommendationsButton()&&s.a.createElement(h.a,{className:"recommended-btn",onClick:function(){return t.getRecommendations()},variant:"contained",color:"primary"},"Get Recommendations"),this.recommendedTracks.length?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Recommended listening"),this.recommendedTracks.map(function(t){return s.a.createElement(R,{className:"recommended",key:t.id,track:t})})):null)}}]),e}(s.a.Component),_=Object(f.a)(v.prototype,"topTracks",[I.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),k=Object(f.a)(v.prototype,"error",[I.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),E=Object(f.a)(v.prototype,"recommendedTracks",[I.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=v))||b,G=Object(A.a)((H=function(t){function e(){var t,a;Object(p.a)(this,e);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s))),Object(c.a)(a,"token",T,Object(m.a)(a)),a.login=function(){var t="".concat("https://accounts.spotify.com/authorize/").concat("?client_id=3fd4982a2e7e44a69326afc24a1d8ee4").concat("&response_type=token").concat("&scope=user-top-read").concat("&redirect_uri=http://localhost:3000/");window.location.href=t},a}return Object(d.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){this.token=y()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},!this.token&&s.a.createElement("div",{className:"login-container"},s.a.createElement(h.a,{onClick:this.login,className:"login-btn",variant:"contained",color:"primary"},"Login with Spotify")),this.token&&s.a.createElement(P,null))}}]),e}(s.a.Component),T=Object(f.a)(H.prototype,"token",[I.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),S=H))||S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.0d9472a0.chunk.js.map