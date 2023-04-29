function n(r){return t=>({get:e=>r.get(t,e),post:e=>r.post(t,e),put:e=>r.put(t,e),head:e=>r.head(t,e),delete:e=>r.delete(t,e),patch:e=>r.patch(t,e)})}export{n as createRequest};
