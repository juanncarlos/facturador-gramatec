import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'ADMIN_NAV.DASHBOARD', '/', null, 'tachometer', null, false, 0),
    new Menu (2, 'ADMIN_NAV.MEMBERSHIP', '/membership', null, 'users', null, false, 0), 
    new Menu (3, 'ADMIN_NAV.UI_FEATURES', null, null, 'laptop', null, true, 0),   
    new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard-o', null, false, 3),  
    new Menu (5, 'Cards', '/ui/cards', null, 'address-card-o', null, false, 3), 
    new Menu (6, 'Components', '/ui/components', null, 'creative-commons', null, false, 3),
    new Menu (7, 'Icons', '/ui/icons', null, 'font-awesome', null, false, 3), 
    new Menu (8, 'List Group', '/ui/list-group', null, 'th-list', null, false, 3), 
    new Menu (9, 'Media Objects', '/ui/media-objects', null, 'object-group', null, false, 3), 
    new Menu (10, 'Tabs & Accordions', '/ui/tabs-accordions', null, 'server', null, false, 3),
    new Menu (11, 'Typography', '/ui/typography', null, 'font', null, false, 3),
    new Menu (15, 'ADMIN_NAV.DYNAMIC_MENU', '/dynamic-menu', null, 'list-ul', null, false, 0),    
    new Menu (16, 'ADMIN_NAV.MAILBOX', '/mailbox', null, 'envelope-o', null, false, 0),

    new Menu (20, 'ADMIN_NAV.FORM_ELEMENTS', null, null, 'pencil-square-o', null, true, 0), 
    new Menu (21, 'Form Controls', '/form-elements/controls', null, 'check-square-o', null, false, 20),
    new Menu (22, 'Form Layouts', '/form-elements/layouts', null, 'th-large', null, false, 20),
    new Menu (24, 'Form Wizard', '/form-elements/wizard', null, 'magic', null, false, 20),
    new Menu (25, 'Editor', '/form-elements/editor', null, 'pencil', null, false, 20),

    /* menu para gestion e inventario */
    new Menu (300, 'ADMIN_NAV.GESTION-VENTA', null, null, 'pencil-square-o', null, true, 0), 
    new Menu (301, 'Nota-venta', '/gestion-venta/nota-venta', null, 'check-square-o', null, false, 300),
    new Menu (302, 'Cotizacion', '/gestion-venta/cotizacion', null, 'th-large', null, false, 300),
    new Menu (303, 'Cotizacion02', '/gestion-venta/cotizacion02', null, 'th-large', null, false, 300),
    new Menu (304, 'Cotizacion03', '/gestion-venta/cotizacion03', null, 'th-large', null, false, 300),
    new Menu (305, 'Consulta-farvet', '/gestion-venta/consulta-farvet', null, 'magic', null, false, 300),

    /* menu para gestion venta */
    new Menu (200, 'ADMIN_NAV.GESTION-INVENTARIO', null, null, 'pencil-square-o', null, true, 0), 
    new Menu (201, 'Cliente', '/gestion-inventario/cliente', null, 'check-square-o', null, false, 200),
    new Menu (202, 'Producto', '/gestion-inventario/producto', null, 'th-large', null, false, 200),
    new Menu (203, 'Vehiculo', '/gestion-inventario/vehiculo', null, 'magic', null, false, 200),


    new Menu (26, 'ADMIN_NAV.TABLES', null, null, 'table', null, true, 0),
    new Menu (27, 'Basic Tables', '/tables/basic-tables', null, 'th', null, false, 26), 
    new Menu (28, 'Dynamic Tables', null, null, 'th-large', null, true, 26), 
    new Menu (30, 'NGX DataTable', '/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28), 
    new Menu (31, 'ADMIN_NAV.TOOLS', null, null, 'wrench', null, true, 0),
    new Menu (32, 'Drag & Drop', '/tools/drag-drop', null, 'hand-paper-o', null, false, 31), 
    new Menu (33, 'Resizable', '/tools/resizable', null, 'expand', null, false, 31), 
    new Menu (34, 'Toaster', '/tools/toaster', null, 'bell-o', null, false, 31), 
    new Menu (40, 'ADMIN_NAV.PAGES', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'LOGIN', '/login', null, 'sign-in', null, false, 40),    
    new Menu (44, 'REGISTER', '/register', null, 'registered', null, false, 40),
    new Menu (45, 'ADMIN_NAV.BLANK', '/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'ADMIN_NAV.ERROR', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new Menu (47, 'Profile', null, null, 'user', null, true, 40),
    new Menu (48, 'Projects', '/profile/projects', null, 'file-o', null, false, 47),    
    new Menu (49, 'User Info', '/profile/user-info', null, 'address-card-o', null, false, 47),
    new Menu (50, 'ADMIN_NAV.CALENDAR', '/calendar', null, 'calendar', null, false, 0),
    new Menu (66, 'ADMIN_NAV.MAPS', null, null, 'globe', null, true, 0),
    new Menu (67, 'Google Maps', '/maps/googlemaps', null, 'map-marker', null, false, 66),
    new Menu (68, 'Leaflet Maps', '/maps/leafletmaps', null, 'map-o', null, false, 66),
    new Menu (70, 'ADMIN_NAV.CHARTS', null, null, 'area-chart', null, true, 0),
    new Menu (71, 'Bar Charts', '/charts/bar', null, 'bar-chart', null, false, 70),
    new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie-chart', null, false, 70),
    new Menu (73, 'Line Charts', '/charts/line', null, 'line-chart', null, false, 70),
    new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'comment-o', null, false, 70),    
    new Menu (140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    new Menu (141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    new Menu (142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    new Menu (143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    new Menu (144, 'Level 5', null, null, 'folder-o', null, false, 143),
    new Menu (200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]

export const horizontalMenuItems = [ 
    new Menu (1, 'ADMIN_NAV.DASHBOARD', '/', null, 'tachometer', null, false, 0),
    new Menu (2, 'ADMIN_NAV.MEMBERSHIP', '/membership', null, 'users', null, false, 0), 
    new Menu (3, 'ADMIN_NAV.UI_FEATURES', null, null, 'laptop', null, true, 0),   
    new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard-o', null, false, 3),  
    new Menu (5, 'Cards', '/ui/cards', null, 'address-card-o', null, false, 3), 
    new Menu (6, 'Components', '/ui/components', null, 'creative-commons', null, false, 3),
    new Menu (7, 'Icons', '/ui/icons', null, 'font-awesome', null, false, 3), 
    new Menu (8, 'List Group', '/ui/list-group', null, 'th-list', null, false, 3), 
    new Menu (9, 'Media Objects', '/ui/media-objects', null, 'object-group', null, false, 3), 
    new Menu (10, 'Tabs & Accordions', '/ui/tabs-accordions', null, 'server', null, false, 3),
    new Menu (11, 'Typography', '/ui/typography', null, 'font', null, false, 3),
    new Menu (31, 'ADMIN_NAV.TOOLS', null, null, 'wrench', null, true, 3),
    new Menu (32, 'Drag & Drop', '/tools/drag-drop', null, 'hand-paper-o', null, false, 31), 
    new Menu (33, 'Resizable', '/tools/resizable', null, 'expand', null, false, 31), 
    new Menu (34, 'Toaster', '/tools/toaster', null, 'bell-o', null, false, 31), 
    new Menu (20, 'ADMIN_NAV.FORM_ELEMENTS', null, null, 'pencil-square-o', null, true, 0), 
    new Menu (21, 'Form Controls', '/form-elements/controls', null, 'check-square-o', null, false, 20),
    new Menu (22, 'Form Layouts', '/form-elements/layouts', null, 'th-large', null, false, 20),
    new Menu (24, 'Form Wizard', '/form-elements/wizard', null, 'magic', null, false, 20),
    new Menu (25, 'Editor', '/form-elements/editor', null, 'pencil', null, false, 20),
    new Menu (26, 'ADMIN_NAV.TABLES', null, null, 'table', null, true, 20),
    new Menu (27, 'Basic Tables', '/tables/basic-tables', null, 'th', null, false, 26), 
    new Menu (28, 'Dynamic Tables', null, null, 'th-large', null, true, 26), 
    new Menu (30, 'NGX DataTable', '/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28), 
    new Menu (40, 'ADMIN_NAV.PAGES', null, null, 'file-text-o', null, true, 0),
    new Menu (15, 'ADMIN_NAV.DYNAMIC_MENU', '/dynamic-menu', null, 'list-ul', null, false, 40), 
    new Menu (43, 'LOGIN', '/login', null, 'sign-in', null, false, 40),    
    new Menu (44, 'REGISTER', '/register', null, 'registered', null, false, 40),
    new Menu (45, 'ADMIN_NAV.BLANK', '/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'ADMIN_NAV.ERROR', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new Menu (47, 'Profile', null, null, 'user', null, true, 40),
    new Menu (48, 'Projects', '/profile/projects', null, 'file-o', null, false, 47),    
    new Menu (49, 'User Info', '/profile/user-info', null, 'address-card-o', null, false, 47),
    new Menu (50, 'ADMIN_NAV.CALENDAR', '/calendar', null, 'calendar', null, false, 40),
    new Menu (16, 'ADMIN_NAV.MAILBOX', '/mailbox', null, 'envelope-o', null, false, 40), 
    new Menu (200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'external-link', '_blank', false, 40),
    new Menu (66, 'ADMIN_NAV.MAPS', null, null, 'globe', null, true, 0),
    new Menu (67, 'Google Maps', '/maps/googlemaps', null, 'map-marker', null, false, 66),
    new Menu (68, 'Leaflet Maps', '/maps/leafletmaps', null, 'map-o', null, false, 66),
    new Menu (70, 'ADMIN_NAV.CHARTS', null, null, 'area-chart', null, true, 0),
    new Menu (71, 'Bar Charts', '/charts/bar', null, 'bar-chart', null, false, 70),
    new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie-chart', null, false, 70),
    new Menu (73, 'Line Charts', '/charts/line', null, 'line-chart', null, false, 70),
    new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'comment-o', null, false, 70)
]