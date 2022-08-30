import React from 'react';

const CaseCard = ({ item }) => {
  return <div class="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
	<img
		 class="object-cover w-full h-48"
		 src="data:image/png;base64,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"
		 alt="Flower and sky"
		 />

	<div class="relative p-4">
	  <h3 class="text-base md:text-xl font-medium text-gray-800">
		{item}
	  </h3>

	  <p class="mt-4 text-base md:text-lg text-gray-600">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit ad assumenda.
	  </p>
	</div>
  </div>;
};

export default CaseCard;
