function n(t){return r=>({get:e=>t.get(r,e),post:e=>t.post(r,e),put:e=>t.put(r,e),head:e=>t.head(r,e),delete:e=>t.delete(r,e),patch:e=>t.patch(r,e)})}export{n as createRequest};
