$( document ).ready( function() {
	$(document).on("keypress", ":input:not(textarea):not([type=submit]):not(#submit)", function(event) {
		if (event.keyCode == 13) {
        event.preventDefault();
    }
	});

	$( document ).on( 'click', '#newImage', function( e ) {
		e.preventDefault();
		var input = '<input class="form-control" id="ground-additional-images" type="text" name="campground[additionalImages][]" placeholder="Image Link">';
		$( this ).before( input );
	} );

	$( '#select-location' ).locationpicker({
		radius: 0,
		inputBinding: {
	      locationNameInput: $('#select-location-address')
	  },
	  enableAutocomplete: true,
	  autocompleteOptions: {
	      componentRestrictions: {country: 'us'}
	  },
	  addressFormat: 'street_address'
	});

	$( '.rating-star' ).on( 'click', function( e ) {
		var that = this;
		e.preventDefault();
		for ( var i = 1; i <= that.id[ that.id.length - 1 ]; i++ ) {
			$( '#rating-star-' + i ).addClass( 'fa-star' );
			$( '#rating-star-' + i ).removeClass( 'fa-star-o' );
		}
		for ( var j = 5; j > that.id[ that.id.length - 1 ]; j-- ) {
			$( '#rating-star-' + j ).addClass( 'fa-star-o' );
			$( '#rating-star-' + j ).removeClass( 'fa-star' );
		}
		$( '#rating' ).val( that.id[ that.id.length - 1 ] );
	} );
} );