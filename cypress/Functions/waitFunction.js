
var Wait_page= function() {

    this.smallwait= function()
    {   
        cy.wait(2000);
    
    }
    this.aboveSmallwait= function()
    {   
        cy.wait(4000);
    
    }
    
    this.midwait= function()
    {   
        cy.wait(7000);
    
    }
    this.abovemidwait= function()
    {   
        cy.wait(10000);
    
    }
    
    this.Longwait= function()
    {   
       cy.wait(15000);
    
    }
    this.Timeout60000= function()
    {   
      const timeOut = {timeOut: 60000}
    
    }
    
    }
    
    
    module.exports= new Wait_page();