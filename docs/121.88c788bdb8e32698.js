"use strict";(self.webpackChunkprojeto_venda=self.webpackChunkprojeto_venda||[]).push([[121],{1121:(b,u,e)=>{e.r(u),e.d(u,{ProdutosModule:()=>i});var p=e(6895),d=e(7809),o=e(1571);const l=[{id:1,descricao:"Unha em gel",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/1.jpg",quantidadeEstoque:2},{id:2,descricao:"Penteado",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/3.jpg",quantidadeEstoque:50},{id:3,descricao:"Maquiagem",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/4.jpg",quantidadeEstoque:1e3}];class r{constructor(){this.produtos=l}getAll(){return this.produtos}getOne(t){return this.produtos.find(a=>a.id==t)}}r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});class s{constructor(t,a){this.produtosService=t,this.route=a}ngOnInit(){const t=this.produtosService.getAll();this.route.queryParamMap.subscribe(a=>{const g=a.get("descricao")?.toLowerCase();this.produtos=g?t.filter(v=>v.descricao.toLowerCase().includes(g)):t})}}s.\u0275fac=function(t){return new(t||s)(o.Y36(r),o.Y36(d.gz))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-produtos"]],decls:22,vars:0,consts:[[1,"product-list"],[1,"product-list__card"],["routerLink","maquiagem",1,"product-list__link"],["src","./assets/4.jpg"],[1,"product-item__name"],["type","button",1,"product-item__buy-button"],["routerLink","unha",1,"product-list__link"],["src","./assets/1.jpg"],["routerLink","penteado",1,"product-list__link"],["src","./assets/3.jpg"]],template:function(t,a){1&t&&(o.TgZ(0,"section",0)(1,"div",1)(2,"a",2),o._UZ(3,"img",3),o.TgZ(4,"h2",4),o._uU(5,"Maquiagem"),o.qZA(),o.TgZ(6,"button",5),o._uU(7,"Veja mais"),o.qZA()()(),o.TgZ(8,"div",1)(9,"a",6),o._UZ(10,"img",7),o.TgZ(11,"h2",4),o._uU(12,"Unha em gel"),o.qZA(),o.TgZ(13,"button",5),o._uU(14,"Veja mais"),o.qZA()()(),o.TgZ(15,"div",1)(16,"a",8),o._UZ(17,"img",9),o.TgZ(18,"h2",4),o._uU(19,"Penteado"),o.qZA(),o.TgZ(20,"button",5),o._uU(21,"Veja mais"),o.qZA()()()())},dependencies:[d.rH],styles:[".product-list[_ngcontent-%COMP%]{padding:10px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:70px;flex-flow:row wrap;justify-content:space-evenly;align-content:center;margin-top:3rem;margin-left:60px}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:380px;background-color:#fff;box-shadow:#63636333 0 2px 8px;margin-bottom:15px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid pink;transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:#ee516b}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-description[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:pink;border:none;color:var(--gray);font-size:22px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{background-color:#ee516b;color:#fff;filter:brightness(1.1);cursor:pointer}"]});var m=e(8929),f=e(2566),h=e(6944);const x=[{path:"",component:s},{path:"produtos",component:s},{path:"unha",component:m.z},{path:"penteado",component:f.O},{path:"maquiagem",component:h.b}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[d.Bz.forChild(x),p.ez,d.Bz]});var P=e(433);class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[p.ez,c,P.u5]})}}]);