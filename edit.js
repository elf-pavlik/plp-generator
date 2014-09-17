$(function(){
  // Set default options
  JSONEditor.defaults.options.theme = 'bootstrap3';
  JSONEditor.defaults.options.disable_edit_json = true;
  JSONEditor.defaults.options.disable_properties = true;
  JSONEditor.defaults.options.disable_collapse = true;
  JSONEditor.defaults.options.disable_array_reorder = true;
  
  //Initialize the editor
  var editor = new JSONEditor(document.getElementById("editor_holder"),{
    schema: {
      title: "Person",
      type: "object",
      properties: {
        "http://schema.org/name": { "type": "string" , "title": "Full Name"},
        "http://schema.org/additionalname": { "type": "string", "title": "Additional Name"},
        "http://schema.org/description": { "type": "string" , "title": "Description"},
        "http://schema.org/birthDate":  { "type": "string", "title": "Birth Date"},
        "http://schema.org/nationality" : { "type" : "string", "title": "Nationality"},
        "http://schema.org/address": {
          type: "object",
          title: "Current location",
          properties: {
            "http://schema.org/streetAddress": { "type": "string" , "title": "Address"},
            "http://schema.org/postalCode": { "type": "string" , "title": "Postal code"},
            "http://schema.org/addressLocality": { "type" : "string" , "title": "City"},
            "http://schema.org/addressCountry": { "type" : "string", "title": "Country"}
          }
        },
        "http://schema.org/telephone": { "type" : "string", "title": "Telephone"},
        "http://schema.org/faxNumber": { "type" : "string", "title": "Fax number"},
        "http://schema.org/url":  { "type" : "string", "title": "Website"},
        "http://schema.org/image": { "type": "string" , "title": "Image Url"},
        "http://schema.org/workLocation": {
          title: "Work",
          type: "array",
          uniqueItems: true,
          items: {
            type: "object",
            title: "Position",
            properties: {
                "http://schema.org/company": { "type" : "string", "title": "Company"},
                "http://schema.org/jobtitle": { "type" : "string", "title": "Job title"},
                "http://schema.org/streetAddress": { "type": "string" , "title": "Address"},
                "http://schema.org/postalCode": { "type": "string" , "title": "Postal code"},
                "http://schema.org/addressLocality": { "type" : "string" , "title": "City"},
                "http://schema.org/addressCountry": { "type" : "string", "title": "Country"}
            }
          }
        },
        "http://schema.org/contactPoint": {
          type: "array",
          title:"Contact information (Twitter, Facebook,...)",
          uniqueItems: true,
          items: {
            type: "object",
            title: "Contact information",
            properties: {
              "http://schema.org/url": {title: "URL",type: "string"}
            }    
          }     
        },
        "http://schema.org/member": {
          type: "array",        
          title:"Memberships",
          uniqueItems: true,
          items: {
            type: "object",
            title: "Membership",
            properties: {
              "http://schema.org/url": {title: "URL",type: "string"},
              "http://schema.org/name": { title: "name", type: "string" }
            }
          }
        }
      }
    }
  });

  $('#generate_btn').click(function() {
    
    // Validate
    var errors = editor.validate();

    if(errors.length) {
      // errors is an array of objects, each with a `path`, `property`, and `message` parameter
      // `property` is the schema keyword that triggered the validation error (e.g. "minLength")
      // `path` is a dot separated path into the JSON object (e.g. "root.path.to.field")
      console.log(errors);
    }
    else {

      // It's valid!, now compose JSON-LD file
      var doc = editor.getValue()      

      console.log(doc)

      var context = {
        "name": "http://schema.org/name",
        "homepage": {"@id": "http://schema.org/homepage", "@type": "@id"},
        "image": {"@id": "http://schema.org/image", "@type": "@id"},
        "additionalName": "http://schema.org/additionalName",
        "description": "http://schema.org/description",
        "homeLocation": "http://schema.org/homeLocation",
        "telephone": "http://schema.org/telephone",
        "faxNumber": "http://schema.org/faxNumber",
        "workLocation": "http://schema.org/workLocation",
        "birthDate": "http://schema.org/birthDate",
        "contactPoint": "http://schema.org/contactPoint",
        "jobTitle": "http://schema.org/jobTitle",
        "memberOf": "http://schema.org/memberOf",
        "employee": "http://schema.org/employee",
        "organizer": "http://schema.org/organizer",
        "nationality": "http://schema.org/nationality",
        "url": "http://schema.org/url",
        "makesOffer": "http://schema.org/makesOffer"
      };

      jsonld.compact(doc, context, function(err, compacted) {
      
        //console.log(err);
        console.log(compacted);

        // make it look good
        //JSON.stringify(compacted, null, 2)

        // output
        //console.log(compacted);
        
      });

    }

  });

});

