function e(e,r){let t=e;if(r.path&&Object.entries(r.path).forEach((([e,r])=>{const a=String(r);if(!a)throw new Error(`The path ${e} has no value`);t=t.replace(`{${e}}`,a)})),r.query){const e=new URLSearchParams(r.query);t=`${t}?${e}`}return t}export{e as handlerUrl};//# sourceMappingURL=chunk-VH7EEN3F.js.map