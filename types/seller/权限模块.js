function t(s){return r=>({get:e=>s.get(r,e),post:e=>s.post(r,e),put:e=>s.put(r,e),head:e=>s.head(r,e),delete:e=>s.delete(r,e),patch:e=>s.patch(r,e)})}export{t as createRequest};
