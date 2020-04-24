<?php
    function sb_add_cpts_to_api( $args, $post_type ) {
        if ( 'result' === $post_type ) {
            $args['show_in_rest'] = true;
        }
        return $args;
    }
    add_filter( 'register_post_type_args', 'sb_add_cpts_to_api', 10, 2 );