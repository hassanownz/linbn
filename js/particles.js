// ============================================
// Interactive Particle System
// ============================================

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.handX = null;
        this.handY = null;
        this.currentPreset = null;
        this.zoom = 1.0;
        this.targetZoom = 1.0;
        this.cameraX = 0;
        this.cameraY = 0;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    
    setPreset(preset) {
        this.currentPreset = preset;
        this.particles = [];
        this.initParticles(preset);
    }
    
    initParticles(preset) {
        const count = preset.particleCount || 150;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * preset.speed,
                vy: (Math.random() - 0.5) * preset.speed,
                radius: Math.random() * preset.maxSize + preset.minSize,
                color: preset.colors[Math.floor(Math.random() * preset.colors.length)],
                alpha: Math.random() * 0.5 + 0.3,
                baseAlpha: Math.random() * 0.5 + 0.3
            });
        }
    }
    
    updateHandPosition(x, y) {
        this.handX = x * this.width;
        this.handY = y * this.height;
    }
    
    clearHandPosition() {
        this.handX = null;
        this.handY = null;
    }
    
    update() {
        if (!this.currentPreset) return;
        
        // Smooth zoom transition with easing (slower for smoother effect)
        this.zoom += (this.targetZoom - this.zoom) * 0.05;
        
        const interactionX = this.handX !== null ? this.handX : this.mouseX;
        const interactionY = this.handY !== null ? this.handY : this.mouseY;
        const interactionRadius = this.currentPreset.interactionRadius || 150;
        const interactionForce = (this.currentPreset.interactionForce || 0.5) * 0.3; // Reduced sensitivity by 70%
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Interaction with hand/mouse (ATTRACTED to cursor/hand)
            if (this.handX !== null || this.mouseX !== 0) {
                const dx = interactionX - particle.x;
                const dy = interactionY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < interactionRadius) {
                    const force = (interactionRadius - distance) / interactionRadius;
                    // Positive force = attraction (removed the minus sign)
                    particle.vx += (dx / distance) * force * interactionForce;
                    particle.vy += (dy / distance) * force * interactionForce;
                    particle.alpha = Math.min(1, particle.baseAlpha + force * 0.5);
                } else {
                    particle.alpha = particle.baseAlpha;
                }
            }
            
            // Boundary check - wrap around
            if (particle.x < 0) particle.x = this.width;
            if (particle.x > this.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.height;
            if (particle.y > this.height) particle.y = 0;
            
            // Damping
            particle.vx *= 0.99;
            particle.vy *= 0.99;
            
            // Random movement
            particle.vx += (Math.random() - 0.5) * 0.1;
            particle.vy += (Math.random() - 0.5) * 0.1;
        });
    }
    
    draw() {
        // Clear with fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        if (!this.currentPreset) return;
        
        // Get zoom focus point (hand position or center)
        const zoomFocusX = this.handX !== null ? this.handX : this.width / 2;
        const zoomFocusY = this.handY !== null ? this.handY : this.height / 2;
        
        // Apply full canvas transformation for zoom
        this.ctx.save();
        this.ctx.translate(zoomFocusX, zoomFocusY);
        this.ctx.scale(this.zoom, this.zoom);
        this.ctx.translate(-zoomFocusX, -zoomFocusY);
        
        // Draw connections if enabled
        if (this.currentPreset.connections) {
            this.drawConnections();
        }
        
        // Draw particles
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.alpha;
            
            if (this.currentPreset.shape === 'circle') {
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = particle.color;
                this.ctx.fill();
            } else if (this.currentPreset.shape === 'star') {
                this.drawStar(particle.x, particle.y, particle.radius, particle.color);
            }
            
            this.ctx.restore();
        });
        
        // Restore canvas transformation
        this.ctx.restore();
        
        // Draw hand position indicator (outside zoom transform)
        if (this.handX !== null) {
            this.ctx.save();
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(this.handX, this.handY, 30, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.restore();
        }
    }
    
    setZoom(newZoom) {
        this.targetZoom = Math.max(0.5, Math.min(3.0, newZoom));
    }
    
    adjustZoom(delta) {
        this.setZoom(this.targetZoom + delta);
    }
    
    drawConnections() {
        const maxDistance = 120;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    this.ctx.save();
                    this.ctx.globalAlpha = (1 - distance / maxDistance) * 0.2;
                    this.ctx.strokeStyle = this.currentPreset.connectionColor || '#ffffff';
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }
    }
    
    drawStar(x, y, radius, color) {
        const spikes = 5;
        const outerRadius = radius;
        const innerRadius = radius / 2;
        
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.beginPath();
        
        for (let i = 0; i < spikes * 2; i++) {
            const angle = (i * Math.PI) / spikes;
            const r = i % 2 === 0 ? outerRadius : innerRadius;
            const px = Math.cos(angle) * r;
            const py = Math.sin(angle) * r;
            
            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.restore();
    }
    
    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Export for use in main script
window.ParticleSystem = ParticleSystem;

