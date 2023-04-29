function n(t){return i=>({get:e=>t.get(i,e),post:e=>t.post(i,e),put:e=>t.put(i,e),head:e=>t.head(i,e),delete:e=>t.delete(i,e),patch:e=>t.patch(i,e)})}export{n as createRequest};
