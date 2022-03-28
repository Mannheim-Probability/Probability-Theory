function changeTag (node, tag) {
	const clone = document.createElement(tag);
	for (const attr of node.attributes) {
	  clone.setAttributeNS(null, attr.name, attr.value);
	}
	while (node.firstChild) {
	  clone.appendChild(node.firstChild);
	}
	node.replaceWith(clone);
	return clone;
}

window.addEventListener("load", function() {
	const proofs = document.getElementsByClassName("ltx_proof");

	if(proofs.size != 0){
		for(let proof of proofs) {
			proof = changeTag(proof, "details");
			proof_name = changeTag(proof.children[0], "summary");
			proof_name.removeAttribute("ltx_runin");
		}
	}

})