function s(o,r){let n=o;if(r.path&&Object.entries(r.path).forEach(([e,i])=>{let t=String(i);if(!t)throw new Error(`The path ${e} has no value`);n=n.replace(`{${e}}`,t)}),r.query){let e=new URLSearchParams(r.query);n=`${n}?${e}`}return n}export{s as a};