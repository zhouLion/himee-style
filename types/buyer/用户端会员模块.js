function t(r){return s=>({get:e=>r.get(s,e),post:e=>r.post(s,e),put:e=>r.put(s,e),head:e=>r.head(s,e),delete:e=>r.delete(s,e),patch:e=>r.patch(s,e)})}export{t as createRequest};
